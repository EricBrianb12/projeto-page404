let pageIntroTimeline;

function initPageAnimations() {
  const pageContent = document.querySelector(".page-content");
  const title = document.querySelector(".text-reveal");
  const subtitle = document.querySelector(".subtitle-reveal");

  if (!pageContent || !title || !subtitle) return;

  const splitTitle = new SplitType(title, { types: "chars" });
  const splitSubtitle = new SplitType(subtitle, { types: "chars" });

  pageContent.style.visibility = "visible";

  gsap.set([...splitTitle.chars, ...splitSubtitle.chars], {
    display: "inline-block",
  });

  gsap.set(".page-content", {
    autoAlpha: 1,
  });

  gsap.set(".logo, .btn-secondary, .menu li", {
    y: -20,
    opacity: 0,
  });

  gsap.set(splitTitle.chars, {
    y: -100,
    rotation: 15,
    opacity: 0,
  });

  gsap.set("video", {
    y: 50,
    opacity: 0,
    scale: 0.8,
  });

  gsap.set(splitSubtitle.chars, {
    x: -30,
    opacity: 0,
    filter: "blur(10px)",
  });

  gsap.set(".content-text", {
    y: 20,
    opacity: 0,
    scale: 0.8,
  });

  gsap.set(".btn-primary", {
    y: -40,
    opacity: 0,
  });

  pageIntroTimeline = gsap.timeline({ paused: true });

  pageIntroTimeline
    .to(
      ".logo, .btn-secondary",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0,
    )
    .to(
      ".menu li",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      },
      0,
    )
    .to(
      splitTitle.chars,
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.9,
        ease: "bounce.out",
      },
      "-=0.2",
    )
    .to(
      "video",
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .to(
      splitSubtitle.chars,
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .to(
      ".content-text",
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .to(
      ".btn-primary",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    );
}

document.addEventListener("DOMContentLoaded", initPageAnimations);
