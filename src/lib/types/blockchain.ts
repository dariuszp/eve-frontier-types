export namespace Blockchain {
    export namespace Types {
        export enum TraitTypeEnum {
            CATEGORY_ID = "categoryID",
            CATEGORY_NAME = "categoryName",
            GROUP_ID = "groupID",
            GROUP_NAME = "groupName",
            ICON = "icon",
            MASS = "mass",
            PORTION_SIZE = "portionSize",
            RADIUS = "radius",
            TYPE_ID = "typeID",
            VOLUME = "volume"
        }

        export type Value = string | number;

        export type Attribute = {
            trait_type: TraitTypeEnum;
            value: Value;
        }

        export type Type = {
            name: string;
            smartItemId: string;
            description: string;
            attributes: Attribute[];
        }

        export type Response = {
            [key: string]: Type;
        }
    }
}

export default Blockchain;