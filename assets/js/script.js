document.querySelector('.right').addEventListener('click', function () {
    let scrollLeft = document.querySelector('#images');
    let left = parseInt(scrollLeft.getAttribute('data-left'));
    let allSlides = scrollLeft.querySelectorAll('img');
    let firstSlideWidth = allSlides[0].clientWidth;
    let sliderWidth = scrollLeft.clientWidth;

    /*const element = document.getElementById("images");
    const cssObj = window.getComputedStyle(element, null);
    
    let bgColor = cssObj.getPropertyValue("padding-right");*/

    console.log(bgColor);

    if (left < allSlides.length * firstSlideWidth - sliderWidth) {

        left += parseInt(firstSlideWidth);

    } else {
        left = 0
    }

    scrollLeft.style.transform = "translate(-" + left + "px ,0)"
    scrollLeft.setAttribute('data-left', left)

});


/*
*  sistema le dimensioni degli elementi nello slider 
*  e nel caso fosse stato effettuato uno spostamento lo mantine
*/

(window.onresize = function () {

    let wrapper = document.querySelector('#images');
    let img = wrapper.querySelectorAll('.img');;
    let sWidth = wrapper.clientWidth;
    let left = parseInt(wrapper.getAttribute('data-left'));
    let oldWidth = parseInt(img[0].clientWidth);

    for (let i = 0; i < img.length; i++) {
        img[i].style.width = "max-content";
    }

    let imgWidth = img[0].clientWidth;

    if (parseInt(sWidth / imgWidth) <= 2) {

        setWidth(2, img, sWidth)

    } else if (parseInt(sWidth / imgWidth) <= 3) {

        setWidth(3, img, sWidth)

    } else {

        setWidth(4, img, sWidth)
    }

    if (left != 0) {
        left = parseInt(img[0].style.width) * Math.round(left / oldWidth);

        wrapper.style.transform = "translate(-" + left + "px ,0)"
        wrapper.setAttribute('data-left', left)
    }

})();

//setta le larghezze agli elementi dello slider
function setWidth(numImg, img, sWidth) {

    for (let i = 0; i < img.length; i++) {
        img[i].style.width = sWidth / numImg + "px";
    }
}