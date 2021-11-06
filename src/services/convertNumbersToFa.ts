const dict: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
};

const toFarsiNumber = (num: string) => {
    let result = "";
    for (const char of num) {
        if (/\d/.test(char)) result += dict[char];
        else {
            result += char;
        }
    }
    return result;
};

export default toFarsiNumber;
