import Page from "../../classes/page";
import GSAP from "gsap";

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
  }

  async onEntryAnimation() {
    const heroTitle = document.querySelector("#hero-title");
    const heroSubtitle = document.querySelector("#hero-subtitle");
    const codingBar = document.querySelector("#coding-bar");
    const designBar = document.querySelector("#design-bar");
    const randomBar = document.querySelector("#random-bar");
    const topBoxTitle1 = document.querySelector(".top-box-title1");
    const topBoxTitle2 = document.querySelector(".top-box-title2");
    const topBoxTitle3 = document.querySelector(".top-box-title3");
    const topicBoxSubtitle1 = document.querySelector(".topic-box-subtitle1");
    const topicBoxSubtitle2 = document.querySelector(".topic-box-subtitle2");
    const topicBoxSubtitle3 = document.querySelector(".topic-box-subtitle3");
    const navbarFirstLink = document.querySelector("#navbar-first-link");
    const navbarSecondLink = document.querySelector("#navbar-second-link");


    const tl = GSAP.timeline({ paused: true, ease: "power4.inOut", delay: 0.1 });

    tl.from(heroTitle, 0.6, { yPercent: 100, opacity: 0 })
      .from(heroSubtitle, 0.6, { yPercent: 100, opacity: 0 }, 0.6)
      .fromTo(codingBar, 0.8, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: .4, transformOrigin: "bottom" }, 0.6)
      .fromTo(designBar, 0.8, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: .4, transformOrigin: "bottom" }, 1.2)
      .fromTo(randomBar, 0.8, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: .4, transformOrigin: "bottom" }, 1.8)
      .from(topicBoxSubtitle1, 0.6, { yPercent: 100, opacity: 0 }, 1.2)
      .from(topicBoxSubtitle2, 0.6, { yPercent: 100, opacity: 0 }, 2)
      .from(topicBoxSubtitle3, 0.6, { yPercent: 100, opacity: 0 }, 2.6)
      .from(topBoxTitle1, 0.6, { yPercent: 100, opacity: 0 }, 1.6)
      .from(topBoxTitle2, 0.6, { yPercent: 100, opacity: 0 }, 2.4)
      .from(topBoxTitle3, 0.6, { yPercent: 100, opacity: 0 }, 3)
      .from(navbarFirstLink, 0.6, { yPercent: 100, opacity: 0 }, 3.2)
      .from(navbarSecondLink, 0.6, { yPercent: 100, opacity: 0 }, 3.4)


    await tl.play();
  }
}
