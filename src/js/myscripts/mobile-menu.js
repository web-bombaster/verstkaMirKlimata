let mobileMenuToggle = function() {

    if (document.querySelector('.jsMobileMenuBtnToggle')) {
    
        const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');
        const body = document.querySelector('body');
        const menu = document.querySelector('.mobile-menu');
    
        body.classList.remove('toggle');
        menu.classList.remove('toggle');
        menuBtn.classList.remove('toggle');

        // Показать / скрыть мобильное меню
        function menuToggle() {

            if (menuBtn.classList.contains('toggle')) {
                menu.classList.add('toggle');
                body.classList.add('toggle');
                // body.style.overflowY = 'hidden';
            } else {
                menu.classList.remove('toggle');
                body.classList.remove('toggle');
                // body.style.overflowY = 'initial';
            }

            closeMobileMenu();
        }
    
        menuBtn.addEventListener("click", menuToggle);
    
        // Закрываем мобильное меню по клику вне его
        function closeMobileMenu() {
            const btnMenu = document.querySelector('.jsMobileMenuBtnToggle');
            const body = document.querySelector('body');
            const menu = document.querySelector('.mobile-menu');
            const mobileFilter = document.querySelector('.mobile-filter');

            document.addEventListener("click", function (e) {
                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_mobileFilter = target == mobileFilter || mobileFilter.contains(target);
                const its_btnMenu = target == btnMenu;

                if (!its_menu && !its_btnMenu && !its_mobileFilter) {
                    menuBtn.classList.remove('toggle');
                    menu.classList.remove('toggle');
                    body.classList.remove('toggle');
                    // body.style.overflowY = 'initial';
                }
            });
        };
    };
};

mobileMenuToggle();
window.addEventListener('resize', mobileMenuToggle, true);