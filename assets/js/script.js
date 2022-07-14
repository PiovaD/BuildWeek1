document.querySelector('.right').addEventListener('click', function () {
    let scrollLeft = document.querySelector('#images');

    let left = parseInt(scrollLeft.getAttribute('data-left'));

    let allSlides = scrollLeft.querySelectorAll('img');

    let firstSlideWidth = allSlides[0].clientWidth;
    let sliderWidth = scrollLeft.clientWidth;

    if (left < allSlides.length * firstSlideWidth - firstSlideWidth) {
       
        left += firstSlideWidth;

    } else {
        left = 0
    }

    scrollLeft.style.marginLeft = - left + 'px'
    scrollLeft.setAttribute('data-left', left)

})