$(document).ready(function () {
    $('.parallax').parallax();
    BH();
});

function BH() {
    let buttonOpenBH = document.getElementsByClassName('buttonBH');
    let buttonOpenTR = document.getElementsByClassName('buttonTR');
    let buttonOpenCO = document.getElementsByClassName('buttonCO');
    let buttonClose = document.getElementsByClassName('buttonClose');
    let body = document.getElementsByTagName('section');
    $(buttonOpenBH).click(function () {
        $('#backgroundBH').fadeIn(500);
        $(body).fadeTo(500, .2);
        $('body').css({
            'overflow': 'hidden'
        })
    });
    $(buttonOpenTR).click(function () {
        $('#backgroundTR').fadeIn(500);
        $(body).fadeTo(500, .2);
        $('body').css({
            'overflow': 'hidden'
        })
    });
    $(buttonOpenCO).click(function () {
        $('#backgroundCO').fadeIn(500);
        $(body).fadeTo(500, .2);
        $('body').css({
            'overflow': 'hidden'
        })
    });
    $(buttonClose).click(function () {
        $('#backgroundBH').fadeOut(500);
        $('#backgroundTR').fadeOut(500);
        $('#backgroundCO').fadeOut(500);
        $(body).fadeTo(500, 1);
        $('body').css({
            'overflow': 'visible'
        })
    });
}
