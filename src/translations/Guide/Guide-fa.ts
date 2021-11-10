import { GameSetupObj, NavObj, StartGameObj } from "./types";

// images
import nameEnterImg from "../../assets/guide/game-setup_nameEnter_fa.jpg";
import charSelectImg from "../../assets/guide/game-setup_charSelect_fa.jpg";

const title = "چگونه از این برنامه استفاده کنیم؟";

const navbar: NavObj = {
    title: "نوار ناوبری",
    description:
        "در این بخش که در بالای صفحه مشاهده میکنید میتوان بین صفحات جابجا شد و زبان برنامه را تغییر داد",
    flag: "تغییر زبان",
    flag_description:
        "با کلیک کردن بر روی این پرچم شما میتوانید زبان برنامه را به انگلیسی/فارسی تغییر دهید",
    logo_description: "با کلیک کردن روی اسم 'مافیا' به صفحه اول میروید",
    nav_brand: "مافیا",
};

const startGame: StartGameObj = {
    title: "شروع بازی",
    description:
        "در این بخش شما باید تعداد بازیکن ها را وارد کنید. این تعداد باید بین ۴ تا ۸۰ نفر باشد",
};

const gameSetup: GameSetupObj = {
    title: "آماده سازی بازی",
    description:
        "در این بخش شما میتوانید نام بازیکن ها را وارد کنید و نقش هایی که میخواهید در سناریو خود داشته باشید انتخاب کنید",
    nameEnterImg,
    charSelectImg,
    nameEnterDescription:
        "همانطور که میبینید در بخش بالایی دکمه ای به نام 'برو به انتخاب کاراکتر' وجود دارد که بعد از اتمام ورود تمام نام ها میتوانید از آن استفاده کنید و نقش ها را ها را انتخاب کنید",
    charSelectDescription:
        "در این بخش همانطور که گفته شد میتوانید با زدن بر روی علامت + به تعداد نقش اضافه کنید و به وسیله - از تعداد آن کم کنید و با زدن بر روی 'نام' نقش توضیحات آن نقش را ببینید. توجه کنید که نقش های خاص را نمیتوان بیشتر از ۱ مورد اضافه کرد. سپس میتوانید 'شروع بازی' را بزنید و به صفحه بازیکن ها منتقل شوید",
};

export const guide_objects_fa = { title, navbar, startGame, gameSetup };
