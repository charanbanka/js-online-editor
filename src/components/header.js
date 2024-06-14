class Header {
  constructor(element) {
    this.element = element;
  }
  componentMounted() {}
  render() {
    let h = `
        <div class="header-container>
            <div>
                <h3 class="">
                <a data-route href="/#/">Js Editor </a>
                </h3>
            </div>
            <div>
                <button>
                <a data-route href="/new">+ </a>
                </button>
            </div>
        </div>
        `;

    document.querySelector(this.element).innerHTML = h;
    this.componentMounted();
    return this;
  }
}

export default Header;
