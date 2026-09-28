// ========================================
// TRICOTIN DA LU
// Pequenas animações da página
// ========================================


// ----------------------------------------
// ANIMAÇÃO AO ENTRAR NA TELA
// ----------------------------------------

const animatedElements = document.querySelectorAll(
    '.category-card, .gallery-item, .about-image, .section-heading'
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = '0';

    element.style.transform =
        'translateY(25px)';

    element.style.transition =
        'opacity .7s ease, transform .7s ease';

    observer.observe(element);

});


// ----------------------------------------
// ADICIONA A ANIMAÇÃO
// ----------------------------------------

const animationStyle = document.createElement('style');

animationStyle.innerHTML = `

    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(animationStyle);


// ----------------------------------------
// HEADER AO ROLAR
// ----------------------------------------

const header =
    document.querySelector('.header');


window.addEventListener(
    'scroll',
    () => {

        if (window.scrollY > 40) {

            header.style.boxShadow =
                '0 8px 30px rgba(100,75,75,.08)';

        } else {

            header.style.boxShadow =
                'none';

        }

    }
);
