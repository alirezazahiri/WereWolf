// img
import IR_FLAG from "../../assets/img/iran-flag-round-icon-64.png";
import UK_FLAG from "../../assets/img/uk-flag-round-icon-64.png";

interface IgetNavLinks {
  guide: string;
  senarios: string;
  settings: string;
  suggested_scenarios: string;
  players: string;
  gods_room: string;
  game_setup: string;
  start_game: string;
  exit_cards: string;
}

export const getNavLinks = ({
  start_game,
  game_setup,
  players,
  settings,
  gods_room,
  suggested_scenarios,
  senarios,
  exit_cards,
  guide,
}: IgetNavLinks) => [
  { name: start_game, to: "/" },
  { name: game_setup, to: "/game-setup" },
  { name: players, to: "/players-roles" },
  { name: gods_room, to: "/god-vision" },
  { name: suggested_scenarios, to: "/suggested-scenarios" },
  { name: senarios, to: "/scenarios" },
  { name: settings, to: "/settings" },
  { name: exit_cards, to: "/exit-cards" },
  { name: guide, to: "/guide" },
];

export { IR_FLAG, UK_FLAG };
