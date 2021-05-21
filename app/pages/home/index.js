import Page from "../../classes/page";

export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        codingBar: "#coding-bar",
        designBar: "#design-bar",
        randomBar: "#random-bar",
      }
    })
  }

  create() {
    super.create();

    this.elements.randomBar.addEventListener('click', () => {
      console.log("Clicked!!");
    })
  }
}
