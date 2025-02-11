
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    hamburger.addEventListener('click', (e) => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    document.querySelectorAll('.gallery-item a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.style.display = 'flex';
            lightboxImg.src = item.href;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});