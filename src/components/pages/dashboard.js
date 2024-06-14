class Dashboard {
  constructor(el) {
    this.el = el;
  }
  componentMounted() {}
  render() {
    let h = ``;
    document.querySelector(this.el).innerHTML = h;
    this.componentMounted();
    return this;
  }
}
