const ribon = {
  init() {
    this.cacheDom();
    this.calcOffset();
    this.bindEvents();
    this.render();
  },

  cacheDom() {
    this.outer = document.querySelector(".info");
    this.inner = this.outer.querySelector(".info__inner");
  },

  calcOffset() {
    this.offsetDif = this.inner.offsetWidth - this.outer.offsetWidth;
  },

  setMouseCords(e) {
    this.percentLeft = e.clientX / window.innerWidth;
    this.offset = this.offsetDif * this.percentLeft;
    console.log(this.offset);
    this.render();
  },

  bindEvents() {
    document.addEventListener("mousemove", e => this.setMouseCords(e));
    document.addEventListener("resize", e => this.setMouseCords(e));
  },

  render() {
    this.inner.style.transform = `translatex(-${this.offset}px)`;
  }
};

ribon.init();
