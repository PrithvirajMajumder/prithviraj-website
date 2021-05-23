import EventEmitter from "events";
import GSAP from "gsap";

export default class Preloader extends EventEmitter {
  constructor() {
    super();
    this.animate();
  }

  async animate() {
    await this.firstText();
    setTimeout(async () => {
      await this.leaveTransition();
      this.emit('completed');
    }, 3000);
  }

  async firstText() {
    const firstText = document.querySelector('#first-text');
    let tl = GSAP.timeline({ paused: true })
      .fromTo(firstText, 2, {
        width: "0",
      }, {
        width: "16.58em",
        ease: "steps(28)"
      }, 0)
      .fromTo(firstText, 0.5, {
        "border-right-color": "rgba(255,255,255,0.75)"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: "steps(28)"
      }, 0)
      .play();
  }

  async leaveTransition() {
    const secondScreen = document.querySelector('.second-screen');
    const fillerScreen = document.querySelector('.filler-screen');
    const preloader = document.querySelector('.preloader');
    const secondText = document.querySelector('#second-text');

    let tltransition = GSAP.timeline({ paused: true, ease: "power4.inOut", })
      .set(fillerScreen, { opacity: 1 })
      .set(secondScreen, { opacity: 1 })
      .fromTo(fillerScreen, 0.8, { scaleY: 0, }, { scaleY: 1, transformOrigin: 'bottom', },)
      .fromTo(secondScreen, 0.8, { scaleY: 0 }, { scaleY: 1, transformOrigin: 'bottom', }, .2)
      .from(secondText, 0.8, { y: 500, transformOrigin: 'bottom', }, .4)
      .set(fillerScreen, { scaleY: 0 })
      .to(secondText, 0.5, { autoAlpha: 0 }, 2)
      .set(preloader, { display: "none" })


    await tltransition.play();
  }
}
