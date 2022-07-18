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
    btnIcon: "fa-duotone fa-comments-question-check",
    link: "https://api.whatsapp.com/send?phone=2250565100029&text=%5BBr%C3%A8ve+pr%C3%A9sentation+%2B+Objet+de+contact...%5D",
    delay: 0,
  },
  {
    id: 2,
    topIcon: "fa-duotone fa-mailbox",
    contactMean: "E-mail",
    contactRef: "kevinkouakou113@gmail.com",
    btnText: "Me joindre",
    // fa-solid fa-phone-arrow-up-right
    btnIcon: "fa-duotone fa-comments-question-check",
    link: "mailto:kevinkouakou113@gmail.com",
    delay: 0.25,
  },
  {
    id: 3,
    topIcon: "fa-brands fa-telegram",
    contactMean: "Telegram",
    contactRef: "@JUST_KEVIN_225",
    btnText: "Me joindre",
    // fa-solid fa-phone-arrow-up-right
    btnIcon: "fa-duotone fa-comments-question-check",
    link: "https://t.me/JUST_KEVIN_225",
    delay: 0.5,
  },
];

export { cardsDatas };
