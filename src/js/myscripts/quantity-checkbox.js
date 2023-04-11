// Если количество чекбоксов больше 5, скрываем их
// и добавляем кнопку Показать все / Свернуть
function quantityCheckbox(element) {
    if (element.querySelector('.filter__label')) {
        const listCheckbox = element.querySelectorAll('.filter__label');
        // console.log(listCheckbox.length);
        if (listCheckbox.length > 5) {
            let btnShowAll = document.createElement('span');
            btnShowAll.classList.add('show-all');
            // show-all
            btnShowAll.innerText = 'Показать все';
            element.append(btnShowAll);

            for (let index = 0; index < listCheckbox.length; index++) {
                if (index >= 5) {
                    let checkboxItem = listCheckbox[index];
                    checkboxItem.classList.add('toggle');
                };
            };
        }
    };
};

// для всех filter__box-checkbox запускаем функцию quantityCheckbox
function searchFieldset() {
    if (document.querySelector('.filter__fieldset > .filter__box-checkbox')) {
        const listFieldset = document.querySelectorAll('.filter__fieldset > .filter__box-checkbox');
        listFieldset.forEach(function(element) {
            quantityCheckbox(element);
        });
    };
};

searchFieldset();


// По щелчку на кнопку Показать все / Свернуть показываем или скрываем лишние чекбоксы в фильтре
function checkboxListToggle() {
	if (document.querySelector('.filter__box-checkbox>.show-all')) {
		let showAll = document.querySelectorAll('.filter__box-checkbox>.show-all');
		showAll.forEach(function(element) {
            // По щелчку на .show-all находим .filter__label,
			element.addEventListener('click', function(e) {
				// const checkbox = this.parentNode.querySelectorAll('.filter__label');
				const checkbox = this.closest('.filter__box-checkbox').querySelectorAll('.filter__label');

                // нужным элементам (>5) делаем toggle класса .toggle для показа / скрытия
                for (let index = 0; index < checkbox.length; index++) {
                    if (index >= 5) {
                        let checkboxItem = checkbox[index];
                        checkboxItem.classList.toggle('toggle');
                    };
                };

                // Меняем текст кнопки
                element.classList.toggle('toggle');
                if (element.classList.contains('toggle')) {
                    element.innerText = 'Свернуть';
                    if (element.closest('.filter__box-checkbox.ss-container')) {
                        element.closest('.filter__box-checkbox.ss-container').style.height = 370 + 'px';
                    };
                } else {
                    element.innerText = 'Показать все';
                    if (element.closest('.filter__box-checkbox.ss-container')) {
                        element.closest('.filter__box-checkbox.ss-container').removeAttribute('style');
                    };
                };

			});
		});
	};
};

checkboxListToggle();