const text = [
  "Web & Mobile Developer",
  "React & Flutter Expert",
  "UI/UX Designer",
  "Content Creator"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typeEffect() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(typeEffect, 2000);
  } else {
    setTimeout(typeEffect, 100);
  }
})();
