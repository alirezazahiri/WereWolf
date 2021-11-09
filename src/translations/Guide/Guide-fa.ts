type NavType = {
    title: string;
    description: string;
    flag: string;
    flag_description: string;
};

const title = "چگونه از این برنامه استفاده کنیم؟";

const navbar: NavType = {
    title: "نوار ناوبری",
    description:
        "در این بخش که در بالای صفحه مشاهده میکنید میتوان بین صفحات جابجا شد و زبان برنامه را تغییر داد",
    flag: "تغییر زبان",
    flag_description:
        "با کلیک کردن بر روی این پرچم شما میتوانید زبان برنامه را به انگلیسی/فارسی تغییر دهید",
};

export const guide_objects_fa = { title, navbar };
