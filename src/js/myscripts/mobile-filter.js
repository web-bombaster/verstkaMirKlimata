// клонируем фильтр в переменную
// если разрешение экрана меньше 1200, вставляем клон в бкос для мобильного фильтра
// по щелчку на кнопку .jsFilterToggle открывать мобильный фильтр .mobile-filter
let mobileFilterToggle = function() {
    if (document.querySelector('.jsFilterToggle')) {

        const widthViewport = document.documentElement.clientWidth;
        const body = document.querySelector('body');
        const menuBtn = document.querySelector('.jsFilterToggle');
        const menu = document.querySelector('.mobile-filter');

        // Задаем необходимые начальные настройки
        menuBtn.setAttribute('disabled', '');
        body.classList.remove('toggle-filter');
        menu.classList.remove('toggle');
        menuBtn.classList.remove('toggle');

        // если разрешение экрана меньше 1200, делаем активной кнопку активации мобильного фильтра
        if (widthViewport <= 1200) {
            menuBtn.removeAttribute('disabled');
        };

        // Показать / скрыть фильтр по клику на кнопку
        function menuToggle() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.mobile-filter');

            if (menuBtn.classList.contains('toggle')) {
                menu.classList.add('toggle');
                body.classList.add('toggle-filter');
                // body.style.overflowY = 'hidden';
            } else {
                menu.classList.remove('toggle');
                body.classList.remove('toggle-filter');
                // body.style.overflowY = 'initial';
            };

            closeMobileMenu();
        };
        menuBtn.addEventListener("click", menuToggle);

        // Закрываем мобильный фильтр по клику вне его
        function closeMobileMenu() {
            document.addEventListener("click", function (e) {
                const body = document.querySelector('body');
                const menuBtn = document.querySelector('.jsFilterToggle');
                const menu = document.querySelector('.mobile-filter');
                const mobileMenu = document.querySelector('.mobile-menu');

                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_mobileMenu = target == mobileMenu || mobileMenu.contains(target);
                const its_btnMenu = target == menuBtn;

                if (!its_menu && !its_btnMenu && !its_mobileMenu) {
                    menuBtn.classList.remove('toggle');
                    menu.classList.remove('toggle');
                    body.classList.remove('toggle-filter');
                    // body.style.overflowY = 'initial';
                };
            });
        };
        // closeMobileMenu();

        // По клику на кнопку открытия фильтра в temp клонируем фильтр. А потом уже temp закидываем в мобильный фильтр
        function filterClone() {
            const filter = document.querySelector('.filter__form');
            let temp = filter.cloneNode(true);
            menu.innerHTML = '';
            menu.append(temp);

            checkboxListToggle(); // По щелчку на кнопку Показать все / Свернуть показываем или скрываем лишние чекбоксы в фильтре

            rangeSlidersSearch();
        };
        menuBtn.addEventListener("click", filterClone);

    };
};

mobileFilterToggle();
window.addEventListener('resize', mobileFilterToggle, true);