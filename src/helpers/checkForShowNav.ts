export const checkForShowNav = (): boolean => {
  const path: string = window.location.pathname;
  return path === "/Accueil" ||
    path === "/Portfolio" ||
    path === "/Moi" ||
    path === "/Contact" ||
    path === "/Skills"
    ? true
    : false;
};
