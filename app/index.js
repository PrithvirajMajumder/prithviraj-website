import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import each from "lodash/each";

class App {
  constructor() {
    this.createContent();
    this.createPages();
    this.addLinkListeners();
  }

  createContent = () => {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages = () => {
    this.pages = {
      home: new Home(),
      aboutme: new AboutMe(),
    };

    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
  }

  async onChange(url) {
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

      console.log(divContent);
    } else {
      console.log("error");
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    each(links, link => {
      link.onclick = event => {
        event.preventDefault();
        const { href } = link;
        this.onChange(href)
      }
    })
  }
}

new App();
