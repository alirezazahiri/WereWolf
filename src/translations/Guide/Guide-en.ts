type Obj = {
    title: string;
    description: string;
    flag: string;
    flag_description: string;
};

const title = "How to use this app?";

const navbar: Obj = {
    title: "Navbar",
    description:
        "this section which is placed on top, you can navigate between pages and change the language",
    flag: "language change",
    flag_description:
        "by clicking on this flag you can set english/persian language for your better experience",
};

export const guide_objects_en = { title, navbar };
