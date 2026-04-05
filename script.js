const menuToggle = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

// Verifica se os elementos existem antes de rodar o código
if (menuToggle && sideMenu && closeMenu && overlay) {

    const showMenu = () => {
        sideMenu.classList.add('active');
        overlay.style.display = 'block'; // Garante que o overlay apareça
        setTimeout(() => overlay.classList.add('active'), 10); // Pequeno delay para a transição CSS funcionar
        document.body.style.overflow = 'hidden';
    };

    const hideMenu = () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Opcional: esconder o display após a transição
        setTimeout(() => {
            if(!sideMenu.classList.contains('active')) overlay.style.display = 'none';
        }, 400); 
    };

    menuToggle.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', hideMenu);
    overlay.addEventListener('click', hideMenu);
}