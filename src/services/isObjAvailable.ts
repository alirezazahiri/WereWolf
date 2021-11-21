// types
import { DictType } from "../redux/types";

const isObjAvailable = (roleDictionary: DictType, names: string[]): boolean => {
    for (const name of names) {
        if (!roleDictionary[name]) return false;
    }
    return true;
};

export default isObjAvailable;
