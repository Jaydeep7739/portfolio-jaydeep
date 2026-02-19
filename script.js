const texts = [
  "Web Developer",
  "BCA Fresher",
  "UI/UX Learner"
];

let i = 0, j = 0, current = "", isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  current = texts[i];
  if (!isDeleting) {
    typingEl.textContent = current.slice(0, ++j);
    if (j === current.length) setTimeout(() => isDeleting = true, 1200);
  } else {
    typingEl.textContent = current.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();