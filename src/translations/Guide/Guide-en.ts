import { GameSetupObj, NavObj, StartGameObj } from "./types";

// images
import nameEnterImg from "../../assets/guide/game-setup_nameEnter_en.jpg";
import charSelectImg from "../../assets/guide/game-setup_charSelect_en.jpg";

const title = "How to use this app?";

const navbar: NavObj = {
    title: "Navbar",
    description:
        "this section which is placed on top, you can navigate between pages and change the language",
    flag: "language change",
    flag_description:
        "by clicking on this flag you can set english/persian language for your better experience",
    logo_description:
        "by clicking on the name 'Mafia' you can navigate to the start page",
    nav_brand: "Mafia",
};

const startGame: StartGameObj = {
    title: "Start Game",
    description:
        "In this page you can enter the 'number of players' you want to have in the game! the number should be sth between 4 to 80",
};

const gameSetup: GameSetupObj = {
    title: "Game Setup",
    description:
        "in this section you can enter the name of players and choose the characters you want to have in your scenario",
    nameEnterImg,
    charSelectImg,
    nameEnterDescription:
        "as you see there is a 'go to character select' button on top of this section and you are allowed to use it while you entered all the names",
    charSelectDescription:
        "in this section, as you know, you can add characters to your game, by clicking + to add, or - to remove(decrease) the character, and by clicking on the name of that character you can see the introduction of that character, notice that special characters can only be chosen once",
};

export const guide_objects_en = { title, navbar, startGame, gameSetup };
