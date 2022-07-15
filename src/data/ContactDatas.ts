type CardModel = {
  id: number;
  topIcon: string;
  contactMean: string;
  contactRef: string;
  btnText: string;
  btnIcon: string;
  link: string;
  delay: number;
};

// Duotone à mettre partout
const cardsDatas: CardModel[] = [
  {
    id: 1,
    topIcon: "fa-brands fa-whatsapp",
    contactMean: "Whatsapp",
    contactRef: "+225 0565100029",
    btnText: "Me joindre",
    btnIcon: "fa-solid fa-comments",
    link: "https://api.whatsapp.com/send?phone=2250565100029&text=%5BBr%C3%A8ve+pr%C3%A9sentation+%2B+Objet+de+contact...%5D",
    delay: 0,
  },
  {
    id: 2,
    // "fa-solid fa-phone-rotary"
    topIcon: "fa-solid fa-phone",
    contactMean: "Telephone",
    contactRef: "+225 0565100029",
    btnText: "Composer et lancer",
    // fa-solid fa-phone-arrow-up-right
    btnIcon: "fa-solid fa-square-phone",
    link: "tel:+2250565100029",
    delay: 0.25,
  },
  {
    id: 3,
    topIcon: "fa-brands fa-telegram",
    contactMean: "Telegram",
    contactRef: "@JUST_KEVIN_225",
    btnText: "Me joindre",
    // fa-solid fa-phone-arrow-up-right
    btnIcon: "fa-solid fa-comments",
    link: "https://t.me/JUST_KEVIN_225",
    delay: 0.5,
  },
];

export { cardsDatas };
