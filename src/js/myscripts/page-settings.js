// по щелчку на кнопку с выбором типа сортировки выпадают доступные варианты сортировки товаров
let pageSort = function() {
    if (document.querySelector('.page-sort__current')) {
        const btnPageSort = document.querySelector('.page-sort__current');
        btnPageSort.addEventListener('click', function() {
            this.classList.toggle('toggle');
            if (this.classList.contains('toggle')) {
                this.nextElementSibling.classList.add('toggle');
            } else {
                this.nextElementSibling.classList.remove('toggle');
            };
        });
    };
};
pageSort();

// по щелчку изменяем тип сортировки товаров
let pageSortToggle = function() {
    if (document.querySelector('.variants-item')) {
        const btnVariants = document.querySelectorAll('.variants-item');
        let variantTitle;
        // по клику на вариант сортировки у всех убираем .toggle, а у активного добавляем его
        btnVariants.forEach(function(element) {
            element.addEventListener('click', function() {
                btnVariants.forEach(function(element) {
                    element.classList.remove('toggle');
                });
                this.classList.toggle('toggle');

                // Текст выбраного варианта в кнопку
                variantTitle = this.innerText;
                this.parentElement.previousElementSibling.querySelector('.title').innerText = variantTitle;
                this.parentElement.classList.remove('toggle');
                this.parentElement.previousElementSibling.classList.remove('toggle');
            });
        });
    };
};
pageSortToggle();

// по щелчку изменяем активность кнопок количества товаров на странице
let pageCountToggle = function() {
    if (document.querySelector('.page-count__item')) {
        const btnCount = document.querySelectorAll('.page-count__item');

        // по клику у всех убираем .toggle, а у активного добавляем его
        btnCount.forEach(function(element) {
            element.addEventListener('click', function() {
                btnCount.forEach(function(element) {
                    element.classList.remove('toggle');
                });
                this.classList.toggle('toggle');
            });
        });
    };
};
pageCountToggle();

// по щелчку изменяем активность кнопок вида отображения сетки товаров
let pageViewToggle = function() {
    if (document.querySelector('.page-view__item')) {
        const btnView = document.querySelectorAll('.page-view__item');
        let gridClass;

        btnView.forEach(function(element) {
            element.addEventListener('click', function() {
                const products = document.querySelector('.products-inner');
                // const productsClassDefault = '.products-inner';

                // по клику у всех убираем .toggle, а у активного добавляем его
                btnView.forEach(function(element) {
                    element.classList.remove('toggle');
                });
                this.classList.toggle('toggle');

                // Достаем имя класса из дата атрибута и раздем его сетке товаров
                gridClass = this.getAttribute('data-class');
                products.setAttribute('class', 'products-inner'); // возвращаем каждый раз в начальное состояние, чтобы не накапливать классы
                products.classList.add(gridClass);
            });
        });
    };
};
pageViewToggle();

// по щелчку изменяем активность кнопок количества товаров на странице
let productModelToggle = function() {
    if (document.querySelector('.product-model__item')) {
        const btnCount = document.querySelectorAll('.product-model__item');

        // по клику у всех убираем .toggle, а у активного добавляем его
        btnCount.forEach(function(element) {
            element.addEventListener('click', function() {
                btnCount.forEach(function(element) {
                    element.classList.remove('toggle');
                });
                this.classList.toggle('toggle');
            });
        });
    };
};
productModelToggle();