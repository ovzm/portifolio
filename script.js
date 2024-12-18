// Seleciona o botão e o popup
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');

// Função para abrir o popup
openPopupBtn.onclick = function() {
    popup.style.display = 'flex'; // Mostra o popup com flexbox para centralizar
}

// Função para fechar o popup ao clicar no botão de fechar
closeBtn.onclick = function() {
    popup.style.display = 'none'; // Esconde o popup
}

// Fecha o popup ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none'; // Esconde o popup
    }
}

// Seleciona todas as seções
const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

// Função para ir para a próxima seção
function goToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = index;
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
