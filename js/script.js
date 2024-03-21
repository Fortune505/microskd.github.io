$(document).ready(function(){
    $('.header_burger').click(function(event) { // Добавляет ивент слис
        $('.header_burger,.header_menu').toggleClass('active'); // Добавляет и уберает при клике класс active
        $('body').toggleClass('lock'); // Добавляет и уберает при клике класс lock
    })
})