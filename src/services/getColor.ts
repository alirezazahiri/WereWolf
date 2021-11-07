const getColor = (type: string) => {
    if (type === "citizen") return "#66DE93";
    if (type === "mafia") return "#DA0037";
    if (type === "independent") return "#5C527F";
    if (type === "mid-independent") return "#F6D167";
    if (type === "all") return "#F9F9F9";
};
export default getColor;
