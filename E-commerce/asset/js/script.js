// Script of userIcon
let userIcon = document.getElementsByClassName("userIcon");

for (let user of userIcon) {
    user.onmouseover = function () {
        let avatar = user.getElementsByClassName("avatar");
        for (let av of avatar) {
            av.style.borderColor = "var(--siteColor)";
            av.style.backgroundColor = "#ffffff"
            av.getElementsByTagName("i")[0].style.color = "var(--siteColor)"
        }
    }

    user.onmouseout = function () {
        let avatar = user.getElementsByClassName("avatar");
        for (let av of avatar) {
            av.style.borderColor = "#ffffff";
            av.style.backgroundColor = "var(--siteColor)"
            av.getElementsByTagName("i")[0].style.color = "#ffffff"
        }
    }
}

// Script of other icons
let icons = document.getElementsByClassName("icon");

for (let icon of icons) {
    let i_icons = icon.getElementsByTagName("i");
    let defaultColor = i_icons[0].style.color;

    icon.onmouseover = function () {
        icon.style.backgroundColor = "var(--siteColor)";

        for (let i_icon of i_icons) {
            i_icon.style.color = "#ffffff";
        }
    }

    icon.onmouseout = function () {
        icon.style.backgroundColor = "#ffffff";

        for (let i_icon of i_icons) {
            i_icon.style.color = defaultColor;
        }
    }
}


// Sticky navbar
// document.getElementById("sticky-navbar").style.width = document.getElementById("header-text").offsetWidth;

// function stickyWidth() {
//     document.getElementById("sticky-navbar").style.width = document.getElementById("header-text").offsetWidth;
// }

// window.addEventListener("resize", stickyWidth);

// Script of sticky bottom navbar
let spans = document.getElementsByClassName("sticky-span");

for (let span of spans) {
    let prev = span.previousElementSibling;
    let i_prevs = prev.getElementsByTagName("i");
    let defaultColor = i_prevs[0].style.color;

    span.onmouseover = function () {
        prev.style.backgroundColor = "var(--siteColor)";

        for (let i_prev of i_prevs) {
            i_prev.style.color = "#ffffff";
        }
    }

    span.onmouseout = function () {
        prev.style.backgroundColor = "#ffffff";

        for (let i_prev of i_prevs) {
            i_prev.style.color = defaultColor;
        }
    }
}

let stickyIcons = document.getElementsByClassName("stickyIcons");

function addTitle() {
    if (window.innerWidth <= 576) {
        for (let i = 0; i < stickyIcons.length; i++) {
            stickyIcons[i].setAttribute("title", spans[i].firstChild.innerText);
        }
    }
}

addTitle();
window.addEventListener("resize", addTitle);