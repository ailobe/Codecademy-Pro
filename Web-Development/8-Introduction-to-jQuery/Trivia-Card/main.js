$(document).ready(() => {
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(600);
    });
    $('.wrong-text-one').on('click', () => {
        $('.wrong-text-one').fadeOut('fast');
        $('.frown').show();
    });
    $('.wrong-text-two').on('click', () => {
        $('.wrong-text-two').fadeOut('fast');
        $('.frown').show();
    });
    $('.wrong-text-three').on('click', () => {
        $('.wrong-text-three').fadeOut('fast');
        $('.frown').show();
    });
    $('.correct-answer').on('click', () => {
        $('.frown').hide();
        $('.smiley').show();
        $('.wrong-text-one').fadeOut('fast');
        $('.wrong-text-two').fadeOut('fast');
        $('.wrong-text-three').fadeOut('fast');
    });
});