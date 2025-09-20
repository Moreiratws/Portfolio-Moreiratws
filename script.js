function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Efeito de digitação
const typing = document.querySelector(".typing");
const text = typing.textContent;
typing.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();
