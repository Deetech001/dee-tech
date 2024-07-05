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

const handlesidebarleft = () => {
  const section2cardcontainer = document.querySelector(
    ".section2cardcontainer"
  );
  section2cardcontainer.scrollBy(500, 0);
};
