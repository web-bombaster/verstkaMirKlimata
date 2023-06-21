const headerFixed = function () {
    const heightHeader = document.querySelector('.header-box').offsetHeight; // высота хедера
    const header = document.querySelector('.header-box'); // высота хедера

    if (window.scrollY > 150) {
        document.body.style.paddingTop = heightHeader + 'px';
        header.classList.add('toggle');
    } else {
        document.body.style.paddingTop = 0;
        header.classList.remove('toggle');
    }
};

headerFixed();
window.addEventListener("scroll", headerFixed);

