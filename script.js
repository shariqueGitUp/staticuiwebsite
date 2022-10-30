// window.addEventListener("scroll", () => {
//     let content = document.querySelector('.TopBar')
//     let contentPostion = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight/1;
//     if (contentPostion < screenPosition) {
//         content.classList.add('active')

//     }
//     else {
//         content.classList.remove('active');
//     }
// });

window.addEventListener("scroll", () => {
    let content = document.querySelector(".section");
    let contentPostion = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPostion < screenPosition) {
        content.classList.add('active');
    }
    else {
        // content.classList.remove('active');
    }
});

window.addEventListener("scroll", () => {
    let content = document.querySelector(".animation");
    let contentPostion = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPostion < screenPosition) {
        content.classList.add('active');
    }
    else {
        // content.classList.remove('active');
    }
});

const openMenu = document.querySelector('.openMenu');
const myLinks = document.querySelector('.myLinks');
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show() {
    myLinks.style.display = "flex";
    myLinks.style.top = "0"
}
function close() {
    myLinks.style.top = "-100%"
}

const visibleBtn = document.getElementById("visible");
const noneDiv = document.getElementById("none");
visibleBtn.addEventListener("click", function () {
    noneDiv.classList.toggle("visibility");
    if (noneDiv.classList.contains("visibility")) {
        visibleBtn.innerText = "Read More"
    }
    else {
        visibleBtn.innerText = "Read Less";
    }
})

// const productContainers = [...document.querySelectorAll('.bruchores')];
// const nxtBtn = [...document.querySelectorAll('.next')];
// const preBtn = [...document.querySelectorAll('.prev')];
// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })


const fHead = document.querySelectorAll(".fHead");

Array.from(fHead).forEach(Element => {
    Element.addEventListener("click", e => {
        Element.classList.toggle("active");
        const accordionItemBody = Element.nextElementSibling;
        if (Element.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


// POPUP DAILOGBOX IMAGE DETAIL SLIDERS
let mainImg = 0;
function controller(x) {
    mainImg = mainImg + x;
    slideShow(mainImg);
}
slideShow(mainImg)
function slideShow(num) {
    let slides = document.getElementsByClassName("frame");
    for (let y of slides) {
        y.style.display = "none";
    }
    if (num == slides.length) {
        mainImg = 0;
        num = 0;
    }
    if (num < 0) {
        mainImg = slides.length - 1;
        num = slides.length - 1;
    }
    slides[num].style.display = "block"
}

// POPUP DIALOGBOX FUNCTIONS

let mainBox = document.getElementById("loginBox")
let loginBtn = document.getElementById("logBtn")
let closeBtn = document.getElementById("ClBtn")
function popUp() {
    loginBtn.addEventListener("click", function () {
        mainBox.classList.add("mainboxActive");
    })
    closeBtn.addEventListener("click", function () {
        mainBox.classList.remove("mainboxActive");
    })
}
popUp();


// SEARCH ITEM FUNCTIONS CODES 
let search = document.querySelector("#searchArea");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log(inputVal);
    let sections = document.querySelector(".socialDetail");
    let bodyPart = document.getElementsByTagName("p")[0].innerText;
    if (bodyPart.includes(inputVal)) {
        sections.style.display = "block";
        sections.style.color = "red";
    }
    else {
        sections.style.display = "none";
    };
    console.log(bodyPart);
});


window.onscroll = () => {
    let html = document.documentElement;
    let Scroll_top = html.scrollTop;
    let heights = html.scrollHeight - html.clientHeight;
    let unit = ( Scroll_top/heights) *100;
    document.getElementById("topStick").style.width = unit + "%"
}