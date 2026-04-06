document.addEventListener("DOMContentLoaded", () => {

const split = new SplitType(".text-reveal", {
  types: "chars"
});

gsap.from(split.chars, {
  y: 40,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power2.out"
});

});