export const checkForShowNav = (): boolean => {
  const path: string = window.location.pathname;
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  if (isDev) {
    return path === "/Accueil" ||
      path === "/Portfolio" ||
      path === "/Moi" ||
      path === "/Contact" ||
      path === "/Skills" ||
      path === "/"
      ? true
      : false;
  }
  return path === "ykev.portfolio/Accueil" ||
    path === "ykev.portfolio/Portfolio" ||
    path === "ykev.portfolio/Moi" ||
    path === "ykev.portfolio/Contact" ||
    path === "ykev.portfolio/Skills" ||
    path === "ykev.portfolio/"
    ? true
    : false;
};
