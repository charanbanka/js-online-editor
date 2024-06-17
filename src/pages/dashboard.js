export default class Dashboard {
  constructor(el) {
    this.el = el;
  }
  componentMounted() {}
  render() {
    let h = `
  <div class="dashboard-container">
    <h4>Dashboard</h4>
  </div>
  `;
    document.querySelector(this.el).innerHTML = h;
    this.componentMounted();
    return this;
  }
}
