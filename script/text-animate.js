document.addEventListener("DOMContentLoaded", () => {

  const split = new SplitType(".text-reveal", {
    types: "chars"
  });

  // 👇 garante que o DOM foi atualizado
  requestAnimationFrame(() => {

    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out"
    });

  });

});