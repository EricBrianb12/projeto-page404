window.addEventListener("load", () => {
  const splitTitle = new SplitType(".text-reveal", { types: "chars" });
  const splitSubtitle = new SplitType(".subtitle-reveal", { types: "chars" });

  gsap.set([...splitTitle.chars, ...splitSubtitle.chars], {
    display: "inline-block",
  });

  gsap.from(".menu li", {
    y: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.from(splitTitle.chars, {
    y: -100,
    rotation: 15,
    opacity: 0,
    stagger: 0.04,
    duration: 0.9,
    ease: "bounce.out",
  });

  gsap.from("video", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scale: 0.8,
    ease: "power3.out",
  });

  gsap.from(".content-text", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    scale: 0.8,
  });

  gsap.from(splitSubtitle.chars, {
    x: -30,
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.03,
    duration: 0.6,
    delay: 0.8,
  });

  gsap.from(".btn-primary", {
    y: -40,
    opacity: 0,
    delay: 1.2,
    duration: 0.6,
    ease: "power3.out",
  });
});
