const modal = function () {

    // let modalBg = document.querySelector('.my-modal'); // оверлей с затемнением для попап окна
    let modalInner = 'my-modal__inner'; // Класс подложки модального окна, по которой при щелчке будет закрываться окно
    let closeModalButton = 'close-modal'; // Класс кнопок для скрытия окна
    let noScroll = 'no-scroll'; // Класс no-scroll, который мы добавляем или скрываем у body при открытии модалки


    // Добавляем кнопки закрытия модалок в их разметку
    const btnCloseModal = function () {
        // Если  модальные окна есть в разметке
        if (document.querySelectorAll('.my-modal-content').length > 0) {
            const modalContent = document.querySelectorAll('.my-modal-content'); // Все модальные окна

            // для каждого окна
            modalContent.forEach(element => {
                // добавляем в разметку span.close-modal
                let closeButton = document.createElement('span');
                closeButton.className = closeModalButton;
                element.prepend(closeButton);
            });
        };
    };

    btnCloseModal();


    // Функция closeModal закрытия модального окна при клике на фон или кнопку закрытия окна
    const closeModal = function () {
        // Вешаем обработчик на весь документ
        document.addEventListener('click', (e) => {
            // Если содержит класс my-modal__inner или close-modal
            if ((e.target.classList.contains(modalInner)) || (e.target.classList.contains(closeModalButton))) {
                e.target.closest('.my-modal').classList.remove('show'); // Убираем активный класс с фона
                document.body.classList.remove(noScroll);
            }
        });
    };

    // Функция openModal открытия модального окна
    const openModal = function () {
        // Если кнопки вызова модалок существуют
        if (document.querySelectorAll('.open-modal').length > 0) {
            // отслеживаем клики по ним
            // let openModals = document.querySelectorAll('.open-modal');
            let openModals = Array.from(document.getElementsByClassName('open-modal')); // т.к. document.getElementsByClassName возвращает коллекцию, переведем ее в массив, чтобы можно было использовать forEach

            openModals.forEach(function (element, index) {

                element.onclick = function(e) {
                    const openModalButtons = '.open-modal'; // Кнопки для показа модальных окон

                    // Если содержит класс open-modal
                    if (openModals[index].closest(openModalButtons)) {
                        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
                        // в modalID записываем значение из href без решетки
                        const modalID = openModals[index].closest(openModalButtons).getAttribute('href').replace('#', '');
                        // отображаем модалку с найденным id
                        document.getElementById(modalID).classList.add('show');
                        document.body.classList.add(noScroll);

                        closeModal(); // запускаем отслеживание закрытия только после открытия модалки
                    }
                };

            });

        };
    };

    openModal();

};

modal();