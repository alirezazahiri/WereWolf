import toFarsiNumber from "../../services/convertNumbersToFa";

// HOME TOASTS
export const HOME_SUCCESS_MESSAGE_EN = (num: string): string =>
    `Do the game setup for ${num} people`;
export const HOME_SUCCESS_MESSAGE_FA = (num: string): string =>
    `بازی را برای ${toFarsiNumber(num)} نفر آماده سازی کنید`;

export const HOME_ERROR_MESSAGE_EN = `Error! number should be in range of 4 to 80`;
export const HOME_ERROR_MESSAGE_FA = `خطا! عدد باید بین ۴ تا ۸۰ باشد`;

// GAME SETUP MOUNT ERRORS
export const GAME_SETUP_MOUNT_ERROR_EN = "invalid count of players";
export const GAME_SETUP_MOUNT_ERROR_FA = "!تعداد بازیکن ها نامعتبر است";

// NAME ENTER MODAL ERRORS
export const NAME_ENTER_ERROR_EN = "this name already exists!";
export const NAME_ENTER_ERROR_FA = "!این نام تکراری است";

// MODAL HEADER ERRORS
export const MODAL_HEADER_ERROR_EN = (num: number) =>
    `please enter ${num} more name${num > 1 ? "s" : ""}!`;
export const MODAL_HEADER_ERROR_FA = (num: number) =>
    `!لطفا ${toFarsiNumber(`${num}`)} نام دیگر وارد کنید`;

export const MODAL_HEADER_ERROR_CHAR_EN = (num: number) =>
    `please choose ${num} more character${num > 1 ? "s" : ""}!`;
export const MODAL_HEADER_ERROR_CHAR_FA = (num: number) =>
    `!لطفا ${toFarsiNumber(`${num}`)} کاراکتر دیگر انتخاب کنید`;

// MODAL HEADER SUCCEEDS
export const MODAL_HEADER_SUCCESS_EN = "pick characters for the scenario";
export const MODAL_HEADER_SUCCESS_FA = "سناریو خود را بچینید";

// MODAL HEADER SUCCESS SUGGESTION
export const MODAL_HEADER_SUCCESS_SUGGESTION_EN = "See characters of the scenario";
export const MODAL_HEADER_SUCCESS_SUGGESTION_FA = "سناریو خود را ببینید";

export const MODAL_HEADER_SUCCESS_CHARS_EN = "tap on the name to see player's role";
export const MODAL_HEADER_SUCCESS_CHARS_FA = "برای دیدن نقش ها روی بازیکن ها کلیک کنید";

// NAME EDIT ERRORS
export const NAME_EDIT_ERROR_EN = "Error! invalid name!";
export const NAME_EDIT_ERROR_FA = "!خطا! نام نامعتبر است";
