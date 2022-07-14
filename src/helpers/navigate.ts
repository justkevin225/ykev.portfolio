import setActive from "./setActive";

const navigate = (): void => {
  const path: string = window.location.pathname.replace(/\//g, "");
  const indicator: any = document.getElementById("indicator");
  const activeIcon: any =
    document.querySelector("#indicator div")?.firstElementChild;
  const children: any = document.querySelectorAll("#nav li");
  let activeLi: any;
  children.forEach((Li: any) => {
    if (Li.id === path) activeLi = Li;
    activeLi === Li
      ? activeLi.classList.add("active")
      : Li.classList.remove("active");

    setActive(path, indicator, activeIcon);
  });
};

export default navigate;
