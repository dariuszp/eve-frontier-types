import Blockchain from "$lib/types/blockchain";
import {attributesToMap} from "$lib/typesSearch/attributesToMap";
import TraitTypeEnum = Blockchain.Types.TraitTypeEnum;

export interface Category {
    id: number;
    name: string;
}

export interface Group {
    id: number;
    name: string;
    categoryId: number;
}

export interface Item extends Omit<Blockchain.Types.Type, 'attributes'> {
    [key: string]: string | number;
}

export interface ExtractSearchResult {
    categories: Category[];
    groups: Group[];
    items: Item[];
}

export const extractSearchData = (response: Blockchain.Types.Response): ExtractSearchResult => {
    const categories: { [key: number]: Category } = {};
    const groups: { [key: number]: Group } = [];
    const items: Item[] = [];

    for (const record of Object.values(response)) {
        const { attributes, ...rest } = record;
        const map = attributesToMap(attributes);
        const categoryId = map[TraitTypeEnum.CATEGORY_ID] as number;
        const categoryName = map[TraitTypeEnum.CATEGORY_NAME] as string;
        const groupId = map[TraitTypeEnum.GROUP_ID] as number;
        const groupName = map[TraitTypeEnum.GROUP_NAME] as string;

        if (!categories[categoryId]) {
            categories[categoryId] = {
                id: categoryId,
                name: categoryName,
            }
        }

        if (!groups[groupId]) {
            groups[groupId] = {
                id: groupId,
                name: groupName,
                categoryId,
            }
        }

        items.push({
            ...rest,
            ...map,
        });
    }
    return {
        categories: Object.values(categories),
        groups: Object.values(groups),
        items,
    };
}

export default extractSearchData;