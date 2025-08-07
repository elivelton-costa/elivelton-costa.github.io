
// Menu móvel
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Animação digitando
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('digitando');
    const phrase = "Sou um Analista de TI curioso por novas tecnologias...";
    let charIndex = 0;
    const typingSpeed = 85;

    function typeWriter() {
        if (charIndex < phrase.length) {
            typingElement.textContent += phrase.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    // Inicia a animação após um breve atraso
    setTimeout(typeWriter, 1000);
});