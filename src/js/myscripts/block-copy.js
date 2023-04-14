// функция будет перемещать блок в указанное место по клику на кнопку
// Параметры:
// block - что перемещаем
// to - куда перемещаем
// metod - append, prepend, before, after - задает способ вставки
// parent - родитель (карточка товара)
// btn - по какой кнопке щелкаем для перемещения

let gridLineActive = function(block, to, metod, parent, btn) {
    // т.к. document.getElementsByClassName(parent) возвращает коллекцию, переведем ее в массив
    const cards = Array.from(document.getElementsByClassName(parent));
    const mybtn = document.querySelector(btn);

    mybtn.addEventListener('click', function() {

        cards.forEach(function(element) {
            switch (metod) {
                case 'prepend':
                    element.querySelector(to).prepend(element.querySelector(block));
                    break;

                case 'before':
                    element.querySelector(to).before(element.querySelector(block));
                    break;

                case 'after':
                    element.querySelector(to).after(element.querySelector(block));
                    break;

                default:
                    element.querySelector(to).append(element.querySelector(block));
                    break;
            };
        });

    });

};

// Перенос элементов для кнопки grid-slim-line
gridLineActive ('.product-item__availability', '.product-item__middle', 'append', 'product-item', '.page-view__item[data-class="grid-slim-line"]');
gridLineActive ('.labels', '.product-item__middle', 'append', 'product-item', '.page-view__item[data-class="grid-slim-line"]');

// Перенос элементов для кнопки grid-line
gridLineActive ('.product-item__availability', '.product-item__footer', 'prepend', 'product-item', '.page-view__item[data-class="grid-line"]');
gridLineActive ('.product-item__btn-box', '.product-item__head', 'prepend', 'product-item', '.page-view__item[data-class="grid-line"]');
gridLineActive ('.labels', '.product-item__head', 'prepend', 'product-item', '.page-view__item[data-class="grid-line"]');

// Перенос элементов для кнопки grid
gridLineActive ('.product-item__availability', '.product-item__info', 'append', 'product-item', '.page-view__item[data-class="grid"]');
gridLineActive ('.product-item__btn-box', '.product-item__actions', 'append', 'product-item', '.page-view__item[data-class="grid"]');
gridLineActive ('.labels', '.product-item__head', 'prepend', 'product-item', '.page-view__item[data-class="grid"]');