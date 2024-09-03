const showsidebar = () => {
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.add("shown");
  const body = document.querySelector("body");
  body.classList.add("bodyUnscroll");
};

const removesidebar = () => {
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.remove("shown");
  const body = document.querySelector("body");
  body.classList.remove("bodyUnscroll");
};

const moveleft = () => {
  const section2 = document.querySelector(".section2-all");
  section2.scrollBy(700, 0);
};

const moveright = () => {
  const section2 = document.querySelector(".section2-all");
  section2.scrollBy(-700, 0);
};
