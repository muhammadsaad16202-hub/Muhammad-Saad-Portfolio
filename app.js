const welcome = document.getElementById("welcome");
const welcomeEnter = document.getElementById("welcome-enter");

if (welcome && welcomeEnter) {
  document.body.classList.add("no-scroll");
  const dismissWelcome = () => {
    welcome.classList.add("hidden");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      welcome.remove();
    }, 420);
  };

  welcomeEnter.addEventListener("click", dismissWelcome);

  setTimeout(() => {
    if (document.body.contains(welcome)) {
      dismissWelcome();
    }
  }, 5000);
}

const revealTargets = document.querySelectorAll(".section, .hero-text, .hero-card, .marquee, .footer");

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((el) => observer.observe(el));

const copyButton = document.getElementById("copy-email");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("muhammadsaad16202@gmail.com");
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy email";
      }, 1400);
    } catch (error) {
      copyButton.textContent = "Copy failed";
    }
  });
}

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "Close" : "Menu";
  });
}
