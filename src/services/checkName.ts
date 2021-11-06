import {
    NAME_ENTER_ERROR_FA,
    NAME_ENTER_ERROR_EN,
} from "../translations/Toaster/toast-messages";
import toFarsiNumber from "./convertNumbersToFa";
import showToast from "./showToast";
import {
    NAME_EDIT_ERROR_FA,
    NAME_EDIT_ERROR_EN,
} from "../translations/Toaster/toast-messages";

const checkName = (
    names: string[],
    name: string,
    unknown: string,
    language: string,
    prevName?: string
): string | undefined => {
    if (prevName && prevName === name) {
        return name;
    } else if (name === "" && prevName) {
        const message =
            language === "persian" ? NAME_EDIT_ERROR_FA : NAME_EDIT_ERROR_EN;
        showToast("error", message);
    } else if (!name) {
        return `${unknown} ${
            language === "persian"
                ? toFarsiNumber(`${names.length + 1}`)
                : names.length + 1
        }`;
    } else if (names.includes(name)) {
        const message =
            language === "persian" ? NAME_ENTER_ERROR_FA : NAME_ENTER_ERROR_EN;
        showToast("error", message);
        return;
    }
    return name;
};

export default checkName;
