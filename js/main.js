$(document).ready(function () {
    $('.parallax').parallax();
    BH();
});

function BH() {
    let buttonOpenBH = document.getElementById('buttonBH');
    let buttonOpenTR = document.getElementById('buttonTR');
    let buttonOpenCO = document.getElementById('buttonCO');
    let buttonClose = document.getElementsByClassName('buttonClose');
    let body = document.getElementsByTagName('section');
    $(buttonOpenBH).click(function(){
        $('#backgroundBH').fadeIn(500);
        $(body).fadeTo(500, .2);
    });
    $(buttonOpenTR).click(function(){
        $('#backgroundBH').fadeIn(500);
        $(body).fadeTo(500, .2);
    });
    $(buttonOpenCO).click(function(){
        $('#backgroundBH').fadeIn(500);
        $(body).fadeTo(500, .2);
    });
    $(buttonClose).click(function(){
        $('#backgroundBH').fadeOut(500);
        /*$('#backgroundTR').fadeOut(500);
        $('#backgroundCO').fadeOut(500);*/
        $(body).fadeTo(500, 1)
    });
}
