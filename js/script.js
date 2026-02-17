/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

// Check if ScrollReveal is available
if (typeof ScrollReveal !== 'undefined') {
    sr.reveal('.hero__content, .section__header', { delay: 100 });
    sr.reveal('.hero__image', { delay: 300, origin: 'right' });
    sr.reveal('.tentang__image', { delay: 200, origin: 'left' });
    sr.reveal('.tentang__content', { delay: 300, origin: 'right' });
    sr.reveal('.menu__card', { delay: 100, interval: 100 });
    sr.reveal('.testimonials__rating', { delay: 200 });
    sr.reveal('.testimonial__card', { delay: 100, interval: 100 });
    sr.reveal('.galeri__item', { delay: 100, interval: 100 });
    sr.reveal('.kontak__card', { delay: 100, interval: 100 });
    sr.reveal('.kontak__map', { delay: 300, origin: 'right' });
}

/*==================== GALLERY MODAL ====================*/
const galleryItems = document.querySelectorAll('.galeri__item');
const modal = document.getElementById('galeri-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.galeri__modal-close');

// Open modal when clicking on gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = 'block';
        const img = this.querySelector('img');
        modalImg.src = img.src;
    });
});

// Close modal when clicking on close button
if (closeModal) {
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

/*==================== SMOOTH SCROLL ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*==================== LOADING ANIMATION ====================*/
window.addEventListener('load', () => {
    // Add fade-in class to body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

/*==================== CONSOLE MESSAGE ====================*/
console.log('%cPalem Merah - Restoran & Katering', 'color: #C41E3A; font-size: 24px; font-weight: bold;');
console.log('%cMelayani dengan sepenuh hati sejak 20 tahun', 'color: #2A9D8F; font-size: 14px;');
console.log('%cWebsite dibuat dengan ❤️', 'color: #F4A261; font-size: 12px;');

/*==================== INITIALIZE CART ON LANDING PAGE ====================*/
// Render cart count on page load
if (typeof cart !== 'undefined') {
    cart.render();
}
