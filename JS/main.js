const weddingDate = new Date("2027-09-18T19:00:00");

const welcomeScreen = document.getElementById("welcomeScreen");
const enterBtn = document.getElementById("enterBtn");
const container = document.querySelector(".container");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const message = document.getElementById("rsvpMessage");

const themeBtn = document.getElementById("themeBtn");

container.style.display = "none";

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

enterBtn.addEventListener("click", function () {
  welcomeScreen.style.opacity = "0";

  setTimeout(function () {
    welcomeScreen.style.display = "none";
    container.style.display = "block";
    container.classList.add("show");
  }, 600);
});

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      musicBtn.innerHTML = "🔇 Müziği Kapat";
    } else {
      bgMusic.pause();
      musicBtn.innerHTML = "🎵 Müziği Aç";
    }
  });
}

yesBtn.addEventListener("click", function () {
  message.innerHTML = "💖 Katılımınız için teşekkür ederiz.";
});

noBtn.addEventListener("click", function () {
  message.innerHTML = "🌹 Sizi özleyeceğiz.";
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "☀️ Gündüz Modu";
  } else {
    themeBtn.innerHTML = "🌙 Gece Modu";
  }
});
