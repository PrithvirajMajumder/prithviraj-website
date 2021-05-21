import Home from "./pages/home";

class App {
  constructor() {
    this.createContent();
    this.createPages();
  }

  createContent = () => {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
    console.log(this.template);
  }

  createPages = () => {
    this.pages = {
      home: new Home(),
    };

    console.log(this.pages);
  }
}

new App();
