const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
];

const fixNumbers = (str: string) => {
    if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], `${i}`);
        }
    }
    return str;
};

export default fixNumbers;
