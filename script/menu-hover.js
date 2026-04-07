const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".menu a").forEach((link) => {
  let interval = null;

  link.addEventListener("mouseenter", () => {
    let iteration = 0;
    const originalText = link.dataset.text || link.textContent;

    clearInterval(interval);

    interval = setInterval(() => {
      link.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (letter === " ") return " ";
          if (index < iteration) return originalText[index];

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
        link.textContent = originalText;
      }

      iteration += 1 / 3;
    }, 30);
  });

  link.addEventListener("mouseleave", () => {
    clearInterval(interval);
    link.textContent = link.dataset.text || link.textContent;
  });
});

// animação do botão principal no hover

const button = document.querySelector(".btn-primary");
const buttonText = document.querySelector(".btn-primary-text");

if (button && buttonText) {
  const splitButton = new SplitType(buttonText, { types: "chars" });

  gsap.set(splitButton.chars, {
    display: "inline-block",
  });

  let waveAnimation;

  button.addEventListener("mouseenter", () => {
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

  button.addEventListener("mouseleave", () => {
    if (waveAnimation) waveAnimation.kill();

    gsap.to(splitButton.chars, {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  });
}
