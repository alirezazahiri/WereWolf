import {
  GameSetupObj,
  NavObj,
  StartGameObj,
  PlayersObj,
  GodVisionObj,
  ScenariosObj,
  SuggestedScenariosObj,
} from "./types";

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
  logo_description: "با کلیک کردن روی اسم 'گرگ نما' به صفحه اول میروید",
  nav_brand: "گرگ نما",
};

const startGameGuide: StartGameObj = {
  title: "شروع بازی",
  description:
    "در این بخش شما باید تعداد بازیکن ها را وارد کنید. این تعداد باید بین ۴ تا ۸۰ نفر باشد",
};

const gameSetupGuide: GameSetupObj = {
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

const playersGuide: PlayersObj = {
  title: "بازیکن ها",
  description:
    "در این بخش شما نام بازیکن ها را خواهید دید که در آن با کلیک کردن بر روی نام هر بازیکن میتوانید به نقش آن بازیکن پی ببرید. همچنین یک دکمه 'بروزرسانی' قرار دارد که با آن میتوانید نقش ها را برای بار دیگر بین بازیکن ها پخش کنید",
};

const godVisionGuide: GodVisionObj = {
  title: "اتاق گرداننده",
  description:
    "در این صفحه شما هر بازیکن و نقش آن را در یک کارت مخصوص دارید که میتوانید در آن یادداشت کنید. و با جستجوی نام و نقش آنها به بازیکن ها دسترسی راحت تری داشته باشید",
};

const scenariosGuide: ScenariosObj = {
  title: "نقش ها",
  description:
    "در این بخش میتوانید توضیحات مربوط به هر نقش را بخوانید و نحوه بازی کردن با هر نقش را یاد بگیرید",
};

const suggestedScenarios: SuggestedScenariosObj = {
  title: "سناریو های پیشنهادی",
  description:
    "این بخش یک سری از سناریو های معروف که در برنامه های تلویزیونی یا یوتیوب یا غیره را معرفی کرده و میتوان با استفاده از آنها (با توجه به تعداد مشخص بازیکن ها), تنها با وارد کردن اسامی بازیکنان به شروع بازی پرداخت",
};

export const guide_objects_fa = {
  title,
  navbar,
  startGameGuide,
  gameSetupGuide,
  playersGuide,
  godVisionGuide,
  scenariosGuide,
  suggestedScenarios,
};
