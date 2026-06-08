JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Alterna o estado do menu
        navLinks.classList.toggle('active');
        
        // Atualiza a acessibilidade para leitores de tela
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Altera visual do botão hamburguer (opcional)
        menuToggle.classList.toggle('open');
    });

    // Fecha o menu ao clicar em qualquer link (útil para navegação mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});