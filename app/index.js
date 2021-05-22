import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Preloader from "./pages/preloader";
import each from "lodash/each";

class App {
  constructor() {
    new Preloader();
    this.createContent();
    this.createPages();
    this.addLinkListeners();
  }

  createContent = () => {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages = () => {
    const preloader = new Preloader();
    preloader.animate();
    this.pages = {
      home: new Home(),
      aboutme: new AboutMe(),
    };

    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
  }

  async onChange({url}) {
    await this.page.hide();

    const request = await window.fetch(url);

    if(request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      div.innerHTML = html;

      const divContent = div.querySelector(".content");

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];
      this.page.create();
      await this.page.show();
      this.addLinkListeners();

      console.log(divContent);
    } else {
      console.log("error");
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll('.navbar-links');
    each(links, (link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const { href } = link;
        this.onChange({ url: href })
      })
    })
  }
}

new App();
