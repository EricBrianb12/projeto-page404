const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    let iteration = 0;
    const originalText = link.dataset.text;

    const interval = setInterval(() => {
      link.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          if (letter === " ") {
            return " ";
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });
});

// animação do botão principal no hover

const buttonText = document.querySelector(".btn-primary-text");

if (buttonText) {
  const splitButton = new SplitType(buttonText, { types: "chars" });

  gsap.set(splitButton.chars, {
    display: "inline-block",
  });

  let waveAnimation;

  buttonText.addEventListener("mouseenter", () => {
    if (waveAnimation) waveAnimation.kill();

    waveAnimation = gsap.to(splitButton.chars, {
      y: -4,
      duration: 0.35,
      stagger: 0.04,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  buttonText.addEventListener("mouseleave", () => {
    if (waveAnimation) waveAnimation.kill();

    gsap.to(splitButton.chars, {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  });
}
