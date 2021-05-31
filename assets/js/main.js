/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('toggle-color')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* Scroll section */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            document.querySelector('.footer__links a[href*=' + sectionId + ']').classList.add('active-link')
            document.querySelector('.hero__data a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            document.querySelector('.footer__links a[href*=' + sectionId + ']').classList.add('active-link')
            document.querySelector('.hero__data a[href*=' + sectionId + ']').classList.add('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Change header background */
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 20)
        header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* Scroll to the top */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* Accordion */
document.querySelectorAll('.processo__accordion-passo').forEach((item) => {
    item.addEventListener('click', (event) => {
        let accCollapse = item.nextElementSibling;

        if (!item.classList.contains('collapsing')) {

        }

        // Open accordion item
        if (!item.classList.contains('open')) {
            // Remove "collapse" and add "collapsing" class to .processo__collapse (sibling)

            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

            accCollapse.classList = 'processo__collapse collapsing';

            // After x amount of time, Remove "collapsing" class and add "open" class
            setTimeout(() => {
                accCollapse.classList = 'processo__collapse collapse open';
            }, 300);
        }

        // Close accordion item
        else {
            // Remove "collapse open" from .processo__collapse, add "collapsing"
            accCollapse.classList = 'processo__collapse collapsing';


            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);


            setTimeout(() => {
                accCollapse.classList = 'processo__collapse collapse';
                accCollapse.style.height = '';
            }, 300);
        }

        item.classList.toggle('open');
    });
});

/* Swiper */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

/* GSAP Animations */
gsap.from('.hero__data', { opacity: 0, duration: 1, delay: .4, y: -20 })


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".leftcloud"
    }
});

tl.to(".leftcloud, .rightcloud", { opacity: 1, delay: 1.8, duration: 1, x: 0 })
    .to(".firstpin", { opacity: 1, duration: .5, y: 0 })
    .to(".secondpin", { opacity: 1, duration: .5, y: 0 })
    .to(".thirdpin", { opacity: 1, duration: .5, y: 0 })
    .to(".forthpin", { opacity: 1, duration: .5, y: 0 })
    .to(".fifthpin", { opacity: 1, duration: .5, y: 0 })
    .to(".sixthpin", { opacity: 1, duration: .5, y: 0 })
    .to(".lastpin", { opacity: 1, duration: .5, y: 0 })

/* Site service page */
