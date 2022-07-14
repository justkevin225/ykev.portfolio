const setActive = (id: string, indicator: any, activeIcon: any): void => {
  switch (id) {
    case "Skills":
      indicator.classList.remove("Portfolio", "Accueil", "Moi", "Contact");
      activeIcon.classList.remove(
        "fa-laptop-code",
        "fa-house-chimney",
        "fa-user-tie",
        "fa-headset"
      );
      indicator.classList.add("Skills");
      activeIcon.classList.add("fa-chess-knight");
      break;

    case "Portfolio":
      indicator.classList.remove("Skills", "Accueil", "Moi", "Contact");
      activeIcon.classList.remove(
        "fa-chess-knight",
        "fa-house-chimney",
        "fa-user-tie",
        "fa-headset"
      );
      indicator.classList.add("Portfolio");
      activeIcon.classList.add("fa-laptop-code");
      break;

    case "Accueil":
      indicator.classList.remove("Skills", "Portfolio", "Moi", "Contact");
      activeIcon.classList.remove(
        "fa-chess-knight",
        "fa-laptop-code",
        "fa-user-tie",
        "fa-headset"
      );
      indicator.classList.add("Accueil");
      activeIcon.classList.add("fa-house-chimney");
      break;

    case "Moi":
      indicator.classList.remove("Contact", "Accueil", "Portfolio", "Skills");
      activeIcon.classList.remove(
        "fa-chess-knight",
        "fa-laptop-code",
        "fa-house-chimney",
        "fa-headset"
      );

      indicator.classList.add("Moi");
      activeIcon.classList.add("fa-user-tie");
      break;

    case "Contact":
      indicator.classList.remove("Moi", "Accueil", "Portfolio", "Skills");
      activeIcon.classList.remove(
        "fa-chess-knight",
        "fa-laptop-code",
        "fa-house-chimney",
        "fa-user-tie"
      );

      indicator.classList.add("Contact");
      activeIcon.classList.add("fa-headset");
      break;

    default:
      break;
  }
};

export default setActive;
