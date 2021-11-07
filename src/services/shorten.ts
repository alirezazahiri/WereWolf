export const shorten = (str: string, len = 20, dest = 16) => {
    let result = "";
    if (str.length > len) {
        for (let i = 0; i < dest; i++) {
            result += str[i];
        }
        if (result !== str) result += "...";
        return result;
    }
    return str;
};
