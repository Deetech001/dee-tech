const handleshowsidebar = () => {
  console.log(event.target);
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

const handlescrollleft = () => {
  const secondsectioncontainer = document.querySelector(
    ".secondsectioncontainer"
  );
  secondsectioncontainer.scrollBy(500, 0);
};

const handlescrollright = () => {
  const secondsectioncontainer = document.querySelector(
    ".secondsectioncontainer"
  );
  secondsectioncontainer.scrollBy(-500, 0);
};
