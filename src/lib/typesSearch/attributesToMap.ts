import type Blockchain from "$lib/types/blockchain";

export interface AttributesMap {
    [key: string]: string | number
}

export const attributesToMap = (attributes: Blockchain.Types.Attribute[]): AttributesMap => {
    const result: AttributesMap = {};
    attributes.forEach((item) => {
        result[item.trait_type] = item.value;
    });
    return result;
};
