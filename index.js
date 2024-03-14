$(document).ready(function() {
    $('#Expandir').click(function() {
        $('.TecladoNumerico').animate({
            width: 'toggle'
        }, 1300);
        $('.TecladoNumerico').css({
            display: 'flex'
        })
        
    });
});