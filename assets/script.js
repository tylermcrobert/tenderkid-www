(() => {
  const ribbon = document.querySelector(".info");
  const ribbonInner = ribbon.querySelector(".info__inner");
  const cursor = document.querySelector(".cursor");

  const pxDifference = ribbonInner.offsetWidth - ribbon.offsetWidth;
  const windowWidth = window.innerWidth;

  let mousePos = 0;
  let offset = 0;

  const handleMouseMove = e => {
    calc(e.clientX);
    render();
    console.log(cursor);
  };

  const calc = pxLeft => {
    percentLeft = pxLeft / windowWidth;
    offset = pxDifference * percentLeft;
  };

  const render = () => {
    ribbonInner.style.transform = `translatex(-${offset}px)`;
  };

  document.addEventListener("mousemove", handleMouseMove);
})();
