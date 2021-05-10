function delay(n) {
  n = n || 2000;
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
