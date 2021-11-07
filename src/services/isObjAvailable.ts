import { DictType } from "../redux/types";

const isObjAvailable = (roleDictionary: DictType): boolean => {
    for (const value of Object.values(roleDictionary)) {
        if (!value) return false;
    }
    return true;
};

export default isObjAvailable;
