// characters data
import { chars_en } from "../translations/chars/chars-en";
import { chars_fa } from "../translations/chars/chars-fa";

// exit cards data
import { exit_cards_en } from "../translations/ExitCards/ExitCards-en";
import { exit_cards_fa } from "../translations/ExitCards/ExitCards-fa";

// Home data
import { home_objects_en } from "../translations/Home/Home-en";
import { home_objects_fa } from "../translations/Home/Home-fa";

// GameSetup data
import { game_setup_objects_en } from "../translations/GameSetup/GameSetup-en";
import { game_setup_objects_fa } from "../translations/GameSetup/GameSetup-fa";

// Navbar data
import { navbar_objects_en } from "../translations/Navbar/NavBar-en";
import { navbar_objects_fa } from "../translations/Navbar/NavBar-fa";

// Modal data
import { modal_objects_en } from "../translations/Modal/Modal-en";
import { modal_objects_fa } from "../translations/Modal/Modal-fa";

// CharSelect Modal
import { char_select_objects_en } from "../translations/CharSelect/CharSelect-en";
import { char_select_objects_fa } from "../translations/CharSelect/CharSelect-fa";

// NameEnter Modal
import { name_enter_objects_en } from "../translations/NameEnter/NameEnter-en";
import { name_enter_objects_fa } from "../translations/NameEnter/NameEnter-fa";

// FilterCharacters
import { filter_characters_objects_en } from "../translations/FilterCharacters/FilterCharacters-en";
import { filter_characters_objects_fa } from "../translations/FilterCharacters/FilterCharacters-fa";

// PlayerButtons
import { player_buttons_objects_en } from "../translations/PlayerButtons/PlayerButtons-en";
import { player_buttons_objects_fa } from "../translations/PlayerButtons/PlayerButtons-fa";

// Guide
import { guide_objects_en } from "../translations/Guide/Guide-en";
import { guide_objects_fa } from "../translations/Guide/Guide-fa";

// PlayerVision
import { player_vision_objects_en } from "../translations/PlayerVision/PlayerVision-en";
import { player_vision_objects_fa } from "../translations/PlayerVision/PlayerVision-fa";

// suggestion vision
import { suggestion_vision_objects_en } from "../translations/SuggestionVision/suggestionVision-en";
import { suggestion_vision_objects_fa } from "../translations/SuggestionVision/suggestionVision-fa";

// Statistics
import { statistics_objects_fa } from "../translations/Statistics/statistics-fa";
import { statistics_objects_en } from "../translations/Statistics/statistics-en";

// Caution messages
import { caution_objects_en } from "../translations/Caution/caution-en";
import { caution_objects_fa } from "../translations/Caution/caution-fa";

// settings prompts
import { settings_objects_en } from "../translations/Settings/Settings-en";
import { settings_objects_fa } from "../translations/Settings/Settings-fa";

// Godvision
import { godVision_objects_en } from "../translations/GodVision/GodVision-en";
import { godVision_objects_fa } from "../translations/GodVision/GodVision-fa";
import { managePlayersCard_objects_en } from "../translations/ManagePlayerCard/ManagePlayerCard-en";
import { managePlayersCard_objects_fa } from "../translations/ManagePlayerCard/ManagePlayerCard-fa";

const getChars = (language: string) => {
  const chars_obj = language === "english" ? chars_en : chars_fa;
  return {
    characters: chars_obj.characters.map((char, index) => ({
      ...char,
      id: index + 1,
    })),
    names: chars_obj.names,
  };
};

const getExitCards = (language: string) => {
  const exit_cards_obj = language === "english" ? exit_cards_en : exit_cards_fa;
  return {
    exitCards: exit_cards_obj.cards.map((card, index) => ({
      ...card,
      id: index + 1,
    })),
  };
};

const getHome = (language: string) => {
  return language === "english" ? home_objects_en : home_objects_fa;
};

const getGameSetup = (language: string) => {
  return language === "english" ? game_setup_objects_en : game_setup_objects_fa;
};

const getNavbar = (language: string) => {
  return language === "english" ? navbar_objects_en : navbar_objects_fa;
};

const getModal = (language: string) => {
  return language === "english" ? modal_objects_en : modal_objects_fa;
};

const getCharSelect = (language: string) => {
  return language === "english"
    ? char_select_objects_en
    : char_select_objects_fa;
};

const getNameEnter = (language: string) => {
  return language === "english" ? name_enter_objects_en : name_enter_objects_fa;
};

const getFilterCharacters = (language: string) => {
  return language === "english"
    ? filter_characters_objects_en
    : filter_characters_objects_fa;
};

const getPlayerButtons = (language: string) => {
  return language === "english"
    ? player_buttons_objects_en
    : player_buttons_objects_fa;
};

const getGuide = (language: string) => {
  return language === "english" ? guide_objects_en : guide_objects_fa;
};

const getPlayerVision = (language: string) => {
  return language === "english"
    ? player_vision_objects_en
    : player_vision_objects_fa;
};

const getSuggestionVision = (language: string) => {
  return language === "english"
    ? suggestion_vision_objects_en
    : suggestion_vision_objects_fa;
};

const getStatistics = (language: string) => {
  return language === "english" ? statistics_objects_en : statistics_objects_fa;
};

const getCaution = (language: string) => {
  return language === "english" ? caution_objects_en : caution_objects_fa;
};

const getSettings = (language: string) => {
  return language === "english" ? settings_objects_en : settings_objects_fa;
};

const getGodVision = (language: string) => {
  return language === "english" ? godVision_objects_en : godVision_objects_fa;
};

const getManagePlayerCard = (language: string) => {
  return language === "english"
    ? managePlayersCard_objects_en
    : managePlayersCard_objects_fa;
};

export {
  getChars as default,
  getExitCards,
  getHome,
  getGameSetup,
  getNavbar,
  getModal,
  getCharSelect,
  getNameEnter,
  getFilterCharacters,
  getPlayerButtons,
  getGuide,
  getPlayerVision,
  getSuggestionVision,
  getStatistics,
  getCaution,
  getSettings,
  getGodVision,
  getManagePlayerCard,
};
