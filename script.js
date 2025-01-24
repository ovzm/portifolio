// ! Inicializando animação
AOS.init({
    once: true, // As animações só acontecem uma vez
});

// ! POPUP MENU
// const openPopupMenu = document.getElementById('openPopupMenu');
// const popupMenu = document.getElementById('popupMenu');
// const closeMenu = document.querySelector('.closeMenu');

// // Função para abrir o popup
// openPopupMenu.onclick = function () {
//     popupMenu.style.display = 'flex';
// };

// // Função para fechar o popup ao clicar no botão de fechar
// closeMenu.onclick = function () {
//     popupMenu.style.display = 'none';
// };

// // Fecha o popup ao clicar fora do conteúdo
// window.onclick = function (event) {
//     if (event.target == popupMenu) {
//         popupMenu.style.display = 'none';
//     }
// };

// ! POPUP MENU NavBar
// const openPopupBtn = document.getElementById('openPopupBtn');
// const popup = document.getElementById('popup');
// const closeBtn = document.querySelector('.close');

// Função para abrir o popup
// openPopupBtn.onclick = function () {
//    popup.style.display = 'flex'; // Mostra o popup com flexbox para centralizar
// };

// Função para fechar o popup ao clicar no botão de fechar
// closeBtn.onclick = function () {
//    popup.style.display = 'none'; // Esconde o popup
// };

// Fecha o popup ao clicar fora do conteúdo
// window.onclick = function (event) {
//    if (event.target == popup) {
//        popup.style.display = 'none'; // Esconde o popup
//    }
// };

// ! SEÇÕES
const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

// Função para ir para uma seção específica
function goToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = index;
        updateButtonVisibility();
    }
}

// Evento para capturar a rolagem do mouse (wheel)
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        goToSection(currentSectionIndex + 1); // Rolar para baixo
    } else {
        goToSection(currentSectionIndex - 1); // Rolar para cima
    }
});

// Evento para capturar teclas do teclado (setas)
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        goToSection(currentSectionIndex + 1); // Seta para baixo
    } else if (event.key === 'ArrowUp') {
        goToSection(currentSectionIndex - 1); // Seta para cima
    }
});

// ! BUTTONS UP/DOWN
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');

function updateButtonVisibility() {
    btnUp.style.display = currentSectionIndex === 0 ? 'none' : 'block';
    btnDown.style.display = currentSectionIndex === sections.length - 1 ? 'none' : 'block';
}

btnUp.addEventListener('click', () => {
    goToSection(currentSectionIndex - 1); // Subir uma seção
});

btnDown.addEventListener('click', () => {
    goToSection(currentSectionIndex + 1); // Descer uma seção
});

// Chama a função para ajustar a visibilidade dos botões
updateButtonVisibility();

// Função menu navbar
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);