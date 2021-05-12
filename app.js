history.replaceState(null, null, " ");

//BARBA ANIMATIONS

//PAGE SLIDE
function pageTransition() {
  let tl = gsap.timeline();
  tl.to(".transition", {
    translateX: "100%",
    duration: 1,
    visibility: "visible",
    opacity: 1,
    ease: "expo.out",
  });
}
function pageTransitionEnter() {
  let tl = gsap.timeline();
  tl.to(".transition", {
    translateX: "-100%",
    duration: 1,
    opacity: 1,
    ease: "expo.out",
  });
}
//BACKGROUND FADE
function backgroundTransition() {
  let tl = gsap.timeline();
  tl.to(".background", {
    translateX: "0%",
    duration: 0.5,
    visibility: "visible",
    opacity: 1,
    ease: "expo.out",
  });
}

function backgroundTransitionEnter() {
  let tl = gsap.timeline();
  tl.to(".background", {
    translateX: "-100%",
    duration: 0.15,
    opacity: 1,
    ease: "expo.in",
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  preventRunning: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        backgroundTransition();
        await delay(1000);
        done();
      },
      async enter(data) {
        pageTransitionEnter();
        backgroundTransitionEnter();
      },
      async after() {
        textEffect();
        textSlide();
        imageSlide();
      },
    },
  ],
});

//GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
//TITLE EFFECT
function textSlide() {
  const title = gsap.utils.toArray(".title");
  title.forEach((title) => {
    gsap.from(title, {
      x: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: title,
        scrub: 1.5,
        start: "top center",
        end: "top center",
        toggleActions: "play pause restart reset",
      },
    });
  });
}
textSlide();

//IMG EFFECT
function imageSlide() {
  const image = gsap.utils.toArray(".img");
  image.forEach((image) => {
    gsap.from(image, {
      x: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: image,
        scrub: 1.5,
        start: "top center",
        end: "top center",
        toggleActions: "restart pause restart pause",
      },
    });
  });
}
imageSlide();

//TEXT EFFECT
function textEffect() {
  gsap.to(".intro", {
    opacity: 1,
    duration: 5,
    text: {
      value:
        "Hi, my name is Carlos Zepeda and I'm a web developer based in Salt Lake City, UT.",
    },
    ease: "ease",
  });
}
textEffect();
//CUSTOM CURSOR
let follow = document.querySelector(".follower");
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, 0.4, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to(follow, 0.1, {
    x: e.clientX,
    y: e.clientY,
  });
});

gsap.set(".follower", {
  xPercent: -50,
  yPercent: -50,
});
gsap.set(".cursor", {
  xPercent: -50,
  yPercent: -50,
});
