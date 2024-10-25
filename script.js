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
