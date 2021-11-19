let Next1 = document.querySelector('.next1');
let Next2 = document.querySelector('.next2');
let TEXT1 = document.querySelector('.text1');
let PRICE1 = document.querySelector('.price1');
let TEXT2 = document.querySelector('.text2');
let PRICE2 = document.querySelector('.price2');
let TEXT3 = document.querySelector('.text3');
let PRICE3 = document.querySelector('.price3');
let Navigation = document.querySelector('.navigation')
let List = document.querySelector('.list')
let List1 = document.querySelector('.list1')



List.addEventListener('click', function () {
    Navigation.style.display = 'flex'
    List.style.display = 'none'
    List1.style.display = 'block'
})
List1.addEventListener('click', function () {
    Navigation.style.display = 'none'
    List1.style.display = 'none'
    List.style.display = 'block'
})

var slideIndex = 1;
showSlides(slideIndex);
if (slideIndex = 1) {
    Next2.style.display = 'none'
}

function plusSlide() {
    if (slideIndex < 3) {
        showSlides(slideIndex += 1);
    } if (slideIndex > 1) {
        Next2.style.display = 'block'
    } if (slideIndex > 2) {
        Next1.style.display = 'none'
    }

}

function minusSlide() {
    if (slideIndex > 1) {
        showSlides(slideIndex -= 1);
        Next1.style.display = 'block'
    } if (slideIndex < 2) {
        Next2.style.display = 'none'
    }

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



const XHR = new XMLHttpRequest();
XHR.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', false);
XHR.send();
const data = JSON.parse(XHR.responseText);
data.forEach(element => {
    if (element.price < 5) {
        if (element.id == 146) {
            TEXT1.textContent = element.name;
            PRICE1.textContent = `${element.price}$`;
        } if (element.id == 145) {
            TEXT2.textContent = element.name;
            PRICE2.textContent = `${element.price}$`;
        } if (element.id == 133) {
            TEXT3.textContent = element.name;
            PRICE3.textContent = `${element.price}$`;
        }
    }

});