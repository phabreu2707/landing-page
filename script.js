// ========================================
// TRICOTIN DA LU
// ANIMAÇÕES E EFEITOS
// ========================================

document.addEventListener("DOMContentLoaded", () => {


    // ====================================
    // ELEMENTOS QUE APARECEM AO ROLAR
    // ====================================

    const animatedElements =
        document.querySelectorAll(
            ".category-card, .gallery-item, .about-image, .section-heading"
        );


    animatedElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });


    // ====================================
    // SOMBRA DO CABEÇALHO
    // ====================================

    const header =
        document.querySelector(".header");


    function atualizarHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 40) {

            header.style.boxShadow =
                "0 8px 30px rgba(100,75,75,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        atualizarHeader,
        {
            passive: true
        }
    );


    atualizarHeader();


    // ====================================
    // EFEITO NAS FOTOS DA GALERIA
    // ====================================

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    galleryItems.forEach((item) => {

        const image =
            item.querySelector("img");


        if (!image) {
            return;
        }


        item.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 750) {
                    return;
                }


                const rect =
                    item.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width - 0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height - 0.5;


                image.style.transform =
                    `scale(1.025) translate(${x * 2}px, ${y * 2}px)`;

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                image.style.transform = "";

            }
        );

    });


    // ====================================
    // TOQUE NAS FOTOS NO CELULAR
    // ====================================

    galleryItems.forEach((item) => {

        item.addEventListener(
            "touchstart",
            () => {

                galleryItems.forEach(
                    (otherItem) => {

                        if (otherItem !== item) {

                            otherItem.classList.remove(
                                "gallery-active"
                            );

                        }

                    }
                );


                item.classList.toggle(
                    "gallery-active"
                );

            },
            {
                passive: true
            }
        );

    });


});