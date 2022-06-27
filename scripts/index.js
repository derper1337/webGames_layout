(() => {
    $('button').click(() => {
        $('.popup').show();
        $('.overlay_popup').show();
    })
    $('.overlay_popup').click(() => {
        $('.overlay_popup, .popup').hide();
    })

    window.onload = () => {
        setTimeout(() => {
            $(".preloader").fadeOut();
        }, 1000)
    }
})();