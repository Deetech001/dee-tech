const handleshowsidebar = () => {
  console.log(event.target);
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.add("navlinksshown");
};

const handleremovesidebar = () => {
  console.log(event.target);
  const navlinks = document.querySelector(".navlinks");
  navlinks.classList.remove("navlinksshown");
};
