const handleshowsidebar = () => {
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.add("navlinksshown");
  const body = document.querySelector("body");
  body.classList.add("bodyunscroll");
};
const handleremovesidebar = () => {
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.remove("navlinksshown");
  const body = document.querySelector("body");
  body.classList.remove("bodyunscroll");
};

const moveleft = () => {
  const card = document.querySelector(".card");
  card.scrollBy(500, 0);
};

const moveright = () => {
  const card = document.querySelector(".card");
  card.scrollBy(-500, 0);
};
