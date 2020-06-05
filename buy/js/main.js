$(document).ready(function () {
    $('a.scrollto').click(function () {

        $("html, body").animate({scrollTop: $("form").offset().top - 300}, 1000);

        event.preventDefault();

    });
    //
    var d = new Date();
    var elements = document.getElementsByClassName('today');
    var month = d.getMonth();
    if(month < 10) {
        month = '0'+month;
    }
    elements.map = [].map;
    elements.map(function (e) {
        e.innerHTML = d.getDate() + '.' + month + '.' + d.getFullYear();
    });
    //

    var _currentDate = new Date();
    var count = 30; // 8 hours
    var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);

    $('.timeqwqw').countdown({
        until: _toDate,
        format: 'HMS',
        compact: true,
        layout: /* Hours */
        '<span class="hour">{h10}{h1}</span>' +

        /* Monutes */
        '<span class="minute">{m10}{m1}</span>' +

        /* Seconds */
        '<span class="second">{s10}{s1}</span>' +

        '<div class="clear"></div>'
    }).removeClass('hidden');

    var scrollTop = localStorage.getItem('offsetTop');
    $(window).scrollTop(scrollTop);
    localStorage.setItem('offsetTop', 0);
    $('select').on('change', function () {
        var offsetTop = $(this).offset();
        offsetTop = offsetTop.top - 100;
        localStorage.setItem('offsetTop', offsetTop);
        location.href = '/?country_code=' + $(this).val();
    });
});





