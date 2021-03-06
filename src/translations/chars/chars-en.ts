const names = [
  "simple-citizen", // 1
  "armored", // 2
  "detective", // 3
  "doctor", // 4
  "opium", // 5
  "sniper", // 6
  "priest", // 7
  "mayor", // 8
  "hero", // 9
  "judge", // 10
  "cowboy", // 11
  "badass", // 12
  "crooked-hands", // 13
  "revealer", // 14
  "pitman", // 15
  "spectre", // 16
  "contagious", // 17
  "prison-officer", // 18
  "fan", // 19
  "saba", // 20
  "elite", // 21
  "lawyer", // 22
  "spy", // 23
  "baker", // 24
  "nurse", // 25
  "quarantiner", // 26
  "hunter", // 27
  "simin", // 28
  "link", // 29
  "poplar", // 30
  "narrator", // 31
  "hannah", // 32
  "savior", // 33
  "dentist", // 34
  "reporter", // 35

  // ----- Mafia -----

  "simple-mafia", // 36
  "godfather", // 37
  "regicide", // 38
  "sweetheart", // 39
  "psychologist", // 40
  "naughty", // 41
  "slayer", // 42
  "dark-blood", // 43
  "pharmacist", // 44
  "injector", // 45
  "nightmare", // 46
  "night-sleeper", // 47
  "surgeon", // 48
  "guard", // 49
  "double-faced", // 50
  "bomb-maker", // 51
  "charlatan", // 52
  "negotiator", // 53
  "joker", // 54

  // ----- Mid Independents -----

  "malefactor", // 55
  "unknown", // 56
  "twin", // 57
  "sick", // 58
  "dearest", // 59

  // ----- Independents -----

  "thousand-faces", // 60
  "deputy", // 61
  "evil", // 62
  "werewolf", // 63
  "hybrid", // 64
  "sandica", // 65
  "emad", // 66
  "corona", // 67
  "saghar", // 68
];

const citizens = [
  {
    icon: "user",
    title: "Simple Citizen",
    description:
      "Takes part in finding the mafia, and has no special abilities.",
    max: 10,
    type: "citizen",
  },
  {
    icon: "shield",
    title: "Armored",
    description:
      "He looses his armor with the mafia's first shot or 'Exit Vote', but with the 'Exit Vote' he will show his role to others and stay in the game, but with the mafia's shot he only looses his armor and stays in the game",
    max: 1,
    type: "citizen",
  },
  {
    icon: "search",
    title: "Detective",
    description:
      "Everynight it has a chance to inquiry people in the game to determine wether they are mafia or citizen, (Godfather, two-faced and the player who charlatan chose is known as a citizen to him)",
    max: 1,
    type: "citizen",
  },
  {
    icon: "medkit",
    title: "Doctor",
    description:
      "Wakes up everynight to save someone, it only can save itself once",
    max: 1,
    type: "citizen",
  },
  {
    icon: "fire",
    title: "Opium",
    description:
      "Only one night in the whole game it can awake and do its job, and at that night the mafia will not be awakened, after the sun rises it will be elemenated by god",
    max: 1,
    type: "citizen",
  },
  {
    icon: "crosshairs",
    title: "Sniper",
    description:
      "Everynight it can awake and shot a target, if it's target is mafia the mafia will be eliminated either way it will loose the game, it has no impact on independent side",
    max: 1,
    type: "citizen",
  },
  {
    icon: "leaf",
    title: "Priest",
    description:
      "the first time it's been shot, it will be saved by god. witch has no impact on it, every 3 nights it choses someone, if the target is werewolf, it will turn to a simple citizen",
    max: 1,
    type: "citizen",
  },
  {
    icon: "building-o",
    title: "Mayor",
    description:
      "Once in a whole game it can cancel the second turn of voting, at the intro night it will see doctors and Dr. Lecter's hand",
    max: 1,
    type: "citizen",
  },
  {
    icon: "bolt",
    title: "Hero",
    description:
      "Every 2 nights it can choose a person to save him for 24 hours except the voting exit, it can never choose itself",
    max: 1,
    type: "citizen",
  },
  {
    icon: "gavel",
    title: "Judge",
    description:
      "Two times in the game, at the second voting turn it can choose a player to kick 'em out of the game",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user-times",
    title: "Devotee",
    description:
      "One day in the game before the voting starts, it can rise and take a person out of the game with itself",
    max: 1,
    type: "citizen",
  },
  {
    icon: "male",
    title: "Bully",
    description:
      "After the mafia attacks on him, he doesn't go out and can stay in the game for the vote and after that he goes out",
    max: 1,
    type: "citizen",
  },
  {
    icon: "money",
    title: "Crooked Hands",
    description:
      "One night in the whole game it chooses someone and that person will loose it's abilities and turns into a simple citizen or mafia, he's ability has no impact on Detective or Independents",
    max: 1,
    type: "citizen",
  },
  {
    icon: "bullhorn",
    title: "Revealer",
    description:
      "Two nights in the whole game, it can choose a player, whenever that player is gone, it's role will be shown to others, if the revealer goes out before revealing, others will only know the side of the player that goes out",
    max: 1,
    type: "citizen",
  },
  {
    icon: "sign-language",
    title: "Pitman",
    description:
      "Two nights in the whole game it can awake and tell the god to reveal the dead roles",
    max: 1,
    type: "citizen",
  },
  {
    icon: "search-plus",
    title: "Spectre",
    description:
      "Everynight it can choose someone, the god will tell him if the target is independent or not, if it gets 3 negative responses from god, it will be eliminated",
    max: 1,
    type: "citizen",
  },
  {
    icon: "eercast",
    title: "Contagious",
    description:
      "Anyone who does somthing to him, will be infected and silenced for the next day and at the night can't do anything, the second day after being infected it can't vote and by the night it goes out",
    max: 1,
    type: "citizen",
  },
  {
    icon: "lock",
    title: "Prison Officer",
    description:
      "Two nights in the game it sends two people to the prison (except itself). the target will go out of the game for 24 hours",
    max: 1,
    type: "citizen",
  },
  {
    icon: "life-ring",
    title: "Advocate",
    description:
      "everyday with his first vote, it chooses one player, after the voting is finished the target will be replaced with the player sitting next to it.",
    max: 1,
    type: "citizen",
  },
  {
    icon: "exchange",
    title: "Saba",
    description:
      "One night it can choose a player, and get it's ability, and she is forced to use that ability",
    max: 1,
    type: "citizen",
  },
  {
    icon: "graduation-cap",
    title: "Elite",
    description:
      "It can ask a player's role from god, the Elite will know the first two players that targeted him",
    max: 1,
    type: "citizen",
  },
  {
    icon: "balance-scale",
    title: "Lawyer",
    description:
      "One time in the whole game it can choose a player as it's client. the client will never go out by voting while the Lawyer is in the game (except with the Judge's 'Exit Vote')",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user-secret",
    title: "Spy",
    description:
      "Everynight it awakes with the mafia, however it is a citizen, if it somehow reveals himself, the citizens will lose the game, if the charlatan chooses him the spy will leave the game",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user",
    title: "Baker",
    description:
      "At the first night it can't be eliminated, after it is eliminated, the game will continue for 5 days. and the werewolf will win the game wether the werwolf is eliminated mafia will win the game",
    max: 1,
    type: "citizen",
  },
  {
    icon: "plus-square",
    title: "Nurse",
    description:
      "4 nights in the game it chooses one player. if the player is infected, the disease course of the player will have no signs if the chosen player is attacked, will stay in the game for one more day",
    max: 1,
    type: "citizen",
  },
  {
    icon: "ambulance",
    title: "Quarantine",
    description:
      "Each night it can choose a player and the player is safe by giving or getting a disease",
    max: 1,
    type: "citizen",
  },
  {
    icon: "pied-piper-alt",
    title: "hunter",
    description:
      "Every two nights in the game it can choose a player, if the target is werewolf it will be eliminated, at the night phase the only killer of the werewolf is the hunter",
    max: 1,
    type: "citizen",
  },
  {
    icon: "street-view",
    title: "Simin",
    description:
      "Everynight it chooses a player to see wether it is werewolf or not (except hybrid), one night in the game it can eliminate a werewolf",
    max: 1,
    type: "citizen",
  },
  {
    icon: "link",
    title: "Link",
    description:
      "At the first night it chooses two players, if each one of the linked players are eliminated the other one will be eliminated too",
    max: 1,
    type: "citizen",
  },
  {
    icon: "hourglass-1",
    title: "Poplar",
    description:
      "While Poplar is in the game the 'Black Squad' can't win and also the 'Black Squad' abilitis has no impact on her",
    max: 1,
    type: "citizen",
  },
  {
    icon: "book",
    title: "Narrator",
    description:
      "Everynight and whenever it wants, it can rise a hand and the god will write down the latest activity of that night before the hand rising, after the narrator dies the god will read all the things that are recorded by the narrator",
    max: 1,
    type: "citizen",
  },
  {
    icon: "female",
    title: "??????",
    description:
      "Everynight in the game it can choose a player, if that player is independent the target will be eliminated, either way nothing happens, but after two unsuccess tries Hannah will be eliminated",
    max: 1,
    type: "citizen",
  },
  {
    icon: "pagelines",
    title: "Savior",
    description:
      "While a player is being eliminated, it has a chance to guess who is the Savior if the guess is true the player stays in the game, and the Savior turns into a Simple Citizen, if the guess is false the player leaves the game",
    max: 1,
    type: "citizen",
  },
  {
    icon: "wrench",
    title: "Dentist",
    description:
      "Everynight it can choose a new player to silence for 24 hours (can't choose a player twice)",
    max: 1,
    type: "citizen",
  },
  {
    icon: "wifi",
    title: "Reporter",
    description:
      "after Negotiation happens, he can guess the negotioted player to reveal it to others",
    max: 1,
    type: "citizen",
  },
];
// ----------------------- MAFIA -------------------------------
const mafias = [
  {
    icon: "user",
    title: "Simple Mafia",
    description:
      "It is among the mafia's squad and tries to misguide citizens, and has no special abilities",
    max: 10,
    type: "mafia",
  },
  {
    icon: "black-tie",
    title: "Godfather",
    description:
      "Everynight decides to kill someone (has no effect on werewolf and sandica). can NOT be recognized by detective",
    max: 1,
    type: "mafia",
  },
  {
    icon: "tint",
    title: "Regicide",
    description:
      "Two times on the second voting turn can guess someone's role, if he guesses correct, that player would be eliminated",
    max: 1,
    type: "mafia",
  },
  {
    icon: "heart",
    title: "Sweetheart",
    description:
      "As she dies mafia revenges by killing 2 people at night, if the godfather dies she will be the alternative",
    max: 1,
    type: "mafia",
  },
  {
    icon: "handshake-o",
    title: "Psychologist",
    description:
      "One night except the first night, it chooses a player, and the chosen player turns into a mafia with keeping it's abilities (except Malefactor and Independent's Squad)",
    max: 1,
    type: "mafia",
  },
  {
    icon: "flickr",
    title: "Naughty",
    description:
      "One night he chooses a player and that player's votes will not count tommorow, and at the second voting turn, he can vote a person two times or vote two people",
    max: 1,
    type: "mafia",
  },
  {
    icon: "500px",
    title: "Slayer",
    description:
      "One night he chooses a player, and that player dies after 3 days in the middle of the day (under any circumstances), if he attacks Werewolf or Thousand-Faced, he will be eliminated by god",
    max: 1,
    type: "mafia",
  },
  {
    icon: "drupal",
    title: "Dark Blood",
    description:
      "One night he can kill the Contagious or save an infected player, if the Werewolf chooses him, he will NOT turn to a werewolf, and that werewolf dies",
    max: 1,
    type: "mafia",
  },
  {
    icon: "flask",
    title: "Pharmacist",
    description:
      "3 nights in the game it can choose a player to give 'em the Corona's cure, and also it gives the cure to the first none-mafia player, and the cure keeps him safe from being infected for 3 days",
    max: 1,
    type: "mafia",
  },
  {
    icon: "eyedropper",
    title: "Injector",
    description:
      "One night in the game he chooses a player, and god will tell him the role of that player and the job done by that player at that night",
    max: 1,
    type: "mafia",
  },
  {
    icon: "grav",
    title: "Nightmare",
    description:
      "Any player that he chooses gets an endless nightmare, the player that has a nightmare should be awake everynight, otherwise the nightmare kills them",
    max: 1,
    type: "mafia",
  },
  {
    icon: "hotel",
    title: "Night SLeeper",
    description:
      "Everynight he chooses a player and the ability of that player will be used against itself, if he chooses the Witch he will be eliminated",
    max: 1,
    type: "mafia",
  },
  {
    icon: "user-md",
    title: "Dr. Lecter",
    description:
      "Everynight he can save one mafia (can choose himself only once), rises a hand with the Doctor at the introduction night for the Mayor",
    max: 1,
    type: "mafia",
  },
  {
    icon: "car",
    title: "Guard",
    description:
      "While he is in the game the attacks of Malefactor, Werewolf, Crooked-hands and Sandica has no impact on the Godfather, if the Godfather dies he protects Sweetheart",
    max: 1,
    type: "mafia",
  },
  {
    icon: "american-sign-language-interpreting",
    title: "Double-Faced",
    description:
      "Knows all the Mafia, but the mafia dont know him, the Detective's inquiry on Double-Faced is always a citizen, and he never opens his eyes with mafia",
    max: 1,
    type: "mafia",
  },
  {
    icon: "bomb",
    title: "Bomber",
    description:
      "one day in the game before the voting starts chooses a player to take them out of the game with himself",
    max: 1,
    type: "mafia",
  },
  {
    icon: "hand-rock-o",
    title: "Charlatan",
    description:
      "Two nights in the game he can choose a player and the inquiry of that player will be reversed ('mafia into citizen' and 'citizen into mafia') if he chooses the Spy, the Spy will be eliminated",
    max: 1,
    type: "mafia",
  },
  {
    icon: "refresh",
    title: "Negotiator",
    description:
      "at night, it can choose a simple citizen to negotiate it and change it's side to mafia, and it has NO EFFECT on roled citizens",
    max: 1,
    type: "mafia",
  },
  {
    icon: "delicious",
    title: "joker",
    description:
      "It can choose a person to reverse the side of their role for The Detective. meaning that, if the target is a citizen, it shows up as a mafia, and conversely. Joker can only use his ability 'once' on himself!",
    max: 1,
    type: "mafia",
  },
];
// ----------------------- MID INDEPENDENTS -------------------------------
const mid_independents = [
  {
    icon: "hand-o-left",
    title: "Malefactor",
    description:
      "Every two nights in the game can kill someone, and saves himself from the mafia's attack, the condition of his win is the elimination of all mafia and independent chracters and staying in the last two people in the game. (at first he is in citizen's side but in the end he is on independent side)",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "question",
    title: "Unknown",
    description:
      "It does not belong to any group at the beginning of the game. The first time he is chosen by someone, nothing happens to him and he joins that person's side, but he does not have any special abilities.",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "slideshare",
    title: "Twin",
    description:
      "Belongs to none of the existing sides, but any night he wants, he chooses a person and after that person dies he replaces with that person and gets all the abilities of that person.",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "snowflake-o",
    title: "Sick",
    description:
      "It does not belong to any group at the beginning of the game. The first time he is chosen by someone, nothing happens to him and he takes on the role of that player completely. That player becomes a simple character and is also infected with Corona",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "gratipay",
    title: "Dearest",
    description:
      "On odd nights, she chooses two people and understands their roles. Malefactor has to kill one of the two the next night. The condition for her victory is to stay herself or Malefactor between the last 2 people",
    max: 1,
    type: "mid-independent",
  },
];
// ----------------------- INDEPENDENTS -------------------------------
const independents = [
  {
    icon: "users",
    title: "Thousand-Faced",
    description:
      "Owns the character of each player who leaves the game (by voting) for 24 hours. Every person who does something on him, the effect of that work comes back to him (like a mirror). The condition for his victory is to remain among the last three people.",
    max: 1,
    type: "independent",
  },
  {
    icon: "odnoklassniki",
    title: "Deputy",
    description:
      "He will not be killed at night as long as the doctor or Dr. Lecter is present. Knows the mayor. As an identity, it has a counterpart and will have a shot when the doctor and Dr. Lecter (both) are removed from the game. The condition for his victory is the victory of Thousand-Faced",
    max: 1,
    type: "independent",
  },
  {
    icon: "resistance",
    title: "Evil",
    description:
      "From the second night, each night must choose the number of players (equal to the number of that night). If the players are the same color (side), they are all eliminated. The condition for his victory is the victory of Thousand-Faced",
    max: 1,
    type: "independent",
  },
  {
    icon: "gitlab",
    title: "Werewolf",
    description:
      "Every 3 nights during the game, he turns a person into a wolf. His attack on the hunter and the priest is ineffective. At night only a hunter can kill a wolf. The condition for his victory is to get at least half of the people of the city",
    max: 1,
    type: "independent",
  },
  {
    icon: "stumbleupon",
    title: "Hybrid",
    description:
      "He chooses one person every night. God tells Simin the opposite of that player being a wolf. It is a wolf that has no reproductive power and cannot be identified by Simin. If he chooses the Priest, the hybrid is removed",
    max: 1,
    type: "independent",
  },
  {
    icon: "tencent-weibo",
    title: "Sandica",
    description:
      "Knows, The Mafia, Spy, Detective, Malefactor and it stays safe after Malefactor or Mafia attacks. if it is voted to be on the second voting turn, will eliminate a black squad's player, if it last among last three people in the game, earns a victory.",
    max: 1,
    type: "independent",
  },
  {
    icon: "usb",
    title: "Emad",
    description:
      "On the night of the introduction, he chooses two people as his devotees who join his group while maintaining their abilities. Whenever he wants, he does their job and whoever attacks Emad, those two will predecease. The condition for their victory is that Emad remains among the last 3 people",
    max: 1,
    type: "independent",
  },
  {
    icon: "bug",
    title: "Corona",
    description:
      "You get infected if you come in contact with a corona or a corona-infected player. The first 24 hours of infection are the latent period of the disease, and from the second day, the symptoms of the disease will be the same as being infected by a Contagious, but with more contagion. The condition for his victory is the elimination of all players, whether Corona is alive or dead",
    max: 1,
    type: "independent",
  },
  {
    icon: "bandcamp",
    title: "Saghar",
    description:
      "She can use one of her potions every night. Each potion gives Saghar a special ability. The condition for her victory is to stay among the last 3 people.",
    html: `
      <div>
        <div>
          <p>She has 8 potions</p> 
          <p>
            <span>Death</span>
          </br> 
            eliminates the target 
          </p>
          <p>
            <span>Citizen-killer</span>
            </br> 
            by using this, God will choose a random citizen to eliminate
          </p>
          <p>
            <span>Mafia-killer</span>
            </br> 
            by using this, God will choose a random mafia to eliminate
          </p>
          <p>
            <span>Reveal</span>
            </br> 
            the target should reveal his/her role to all the players
          </p>
          <p>
            <span>Sickening</span>
            </br> 
            the target will get sick with no signs and after 48 hours will be eliminated in the middle of the day (This sickness is not contagious)
          </p>
          <p>
            <span>Craziness</span>
            </br> 
            by using this the target can't use his/her ability that night, but instead chooses a player and the chosen player will be eliminated, and the player is silenced for 24 hours
          </p>
          <p>
            <span>Undying</span>
            </br> 
            she has two Undying potions, by using them she can't be eliminated, except by voting
          </p>
        </div>
      </div>
      `,
    max: 1,
    type: "independent",
  },
];

const characters = [
  ...citizens,
  ...mafias,
  ...mid_independents,
  ...independents,
];

export const chars_en = { names, characters };
