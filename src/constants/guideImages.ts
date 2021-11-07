// home
import home_en from "../assets/guide/home_en.jpg";
import home_fa from "../assets/guide/home_fa.jpg";

// gameSetup
import gameSetup_en from "../assets/guide/game-setup_en.jpg";
import gameSetup_fa from "../assets/guide/game-setup_fa.jpg";

// nameEnter
import nameEnter_en from "../assets/guide/game-setup_nameEnter_en.jpg";
import nameEnter_fa from "../assets/guide/game-setup_nameEnter_fa.jpg";

// charSelect
import charSelect_en from "../assets/guide/game-setup_charSelect_en.jpg";
import charSelect_fa from "../assets/guide/game-setup_charSelect_fa.jpg";

// playersRoles
import playersRoles_en from "../assets/guide/players-roles_en.jpg";
import playersRoles_fa from "../assets/guide/players-roles_fa.jpg";

// godVision
import godVision_en from "../assets/guide/god-vision_en.jpg";
import godVision_fa from "../assets/guide/god-vision_fa.jpg";

// scenarios
import scenarios_en from "../assets/guide/scenarios_en.jpg";
import scenarios_fa from "../assets/guide/scenarios_fa.jpg";

type ItemsType = {
    [key: string]: {
        ["en"]: string;
        ["fa"]: string;
    };
};

const guideItems: ItemsType = {
    home: {
        en: home_en,
        fa: home_fa,
    },
    gameSetup: {
        en: gameSetup_en,
        fa: gameSetup_fa,
    },
    nameEnter: {
        en: nameEnter_en,
        fa: nameEnter_fa,
    },
    charSelect: {
        en: charSelect_en,
        fa: charSelect_fa,
    },
    playersRoles: {
        en: playersRoles_en,
        fa: playersRoles_fa,
    },
    godVision: {
        en: godVision_en,
        fa: godVision_fa,
    },
    scenarios: {
        en: scenarios_en,
        fa: scenarios_fa,
    },
};

export default guideItems;