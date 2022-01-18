// Random image
onload = function () {
    let imgArray = ["asset/img/6.jpg", "asset/img/2.jpg", "asset/img/Child-Clothes.jpg", "asset/img/4.jpg", "asset/img/5.jpg"];
    let index = Math.floor(Math.random() * imgArray.length);

    document.getElementById("header-text").style.backgroundImage = `url(${imgArray[index]})`;
}

$(document).ready(function() {
    $('.block__title').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

});