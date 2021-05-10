gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

history.replaceState(null, null, " ");

//TITLE EFFECT
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
//IMG EFFECT
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
// Text slide in
const text = gsap.utils.toArray("p");
text.forEach((text) => {
  gsap.from(text, {
    x: 1000,
    opacity: 0,
    scrollTrigger: {
      trigger: text,
      scrub: 2,
      stagger: 0.5,
      start: "center bottom",
      end: "center bottom",
      markers: true,
      toggleActions: "restart pause restart pause",
    },
  });
});
//TEXT EFFECT
gsap.to(".intro", {
  duration: 5,
  text: {
    value:
      "Hi, my name is Carlos Zepeda and I'm a web devloper focused on design.",
  },
  ease: "ease",
});

//CUSTOM CURSOR
let follow = document.querySelector(".follower");
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, 0.4, { x: e.clientX, y: e.clientY });
  gsap.to(follow, 0.1, { x: e.clientX, y: e.clientY });
});

gsap.set(".follower", { xPercent: -50, yPercent: -50 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
