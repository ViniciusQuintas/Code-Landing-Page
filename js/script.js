// menu responsivo 

const abrir = document.querySelector('.menu-icon i');
const fechar = document.querySelector('.fa-xmark');
const MenuMobile = document.querySelector('.menu-mobile');

$(abrir).click(function () { 
    $(MenuMobile).addClass('active');

// recarregar a página quaando redimensioonada 

    $(window).bind('resize', function () {
        setTimeout(() => {
            location.reload(); 
        }, 1000);
    });
    
});

$(fechar).click(function () { 
    $(MenuMobile).removeClass('active');
});

// cards 

const card = document.querySelectorAll('.card');

function over(color) {
    $(card).mousemove(function () { 
        $(this).css('background', color);
        $(this).find('h2').css('color', '#f1faee');
        $(this).find('p').css('color', '#f1faee');
        $(this).find('i').css('color', '#f1faee');
    });
}

function out(color) {
    $(card).mouseout(function () { 
        $(this).css('background', 'transparent');
        $(this).find('h2').css('color', '#343a40');
        $(this).find('p').css('color', '#343a40');
        $(this).find('i').css('color', color);
    });
}

// faq

$('.ask .question i').click(function () { 
    
    $(this).parent().parent().find('.answer').slideToggle();

    $(this).toggleClass('rotate');
});

// scroll 

$('menu li a').click(function () { 
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});