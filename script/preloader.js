window.addEventListener("load", () => {
  const splitLoader = new SplitType(".preloader-text", { types: "chars" });

  gsap.set(splitLoader.chars, {
    display: "inline-block",
  });

  const loaderBounce = gsap.to(splitLoader.chars, {
    y: -10,
    duration: 0.4,
    stagger: 0.08,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  const tl = gsap.timeline({
    delay: 2,
    onComplete: () => {
      document.body.style.overflow = "auto";
      document.querySelector(".preloader").remove();
    },
  });

  tl.to(".preloader-text", {
    opacity: 0,
    duration: 0.3,
    onStart: () => loaderBounce.kill(),
  })
    .to(
      ".preloader-top",
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      0.2,
    )
    .to(
      ".preloader-bottom",
      {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      0.2,
    );
});
