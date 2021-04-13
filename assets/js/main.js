/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
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
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Change header background */
function scrollHeader (){
    const header = document.getElementById('header')
    if(this.scrollY >= 20) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* Scroll to the top */
function scrollTop (){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* Accordion */
document.querySelectorAll('.processo__accordion-passo').forEach((item) => {
    item.addEventListener('click', (event) => {
        let accCollapse = item.nextElementSibling;

        if (!item.classList.contains('collapsing')){
            
        }

        // Open accordion item
        if (!item.classList.contains('open')){
            // Remove "collapse" and add "collapsing" class to .processo__collapse (sibling)

            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;

            setTimeout (() => {
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