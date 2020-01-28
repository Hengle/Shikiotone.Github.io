if (typeof jQuery == 'undefined') {
    document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js">');
    document.write('</' + 'script' + '>')
}

if (!image_urls) {
    var image_urls = Array()
}
if (!flash_urls) {
    var flash_urls = Array()
}
image_urls['rain1'] = "http://www.tenshi-no-3p.com/js/common/lib/pixi/asset/particle1.png";
image_urls['rain2'] = "http://www.tenshi-no-3p.com/js/common/lib/pixi/asset/particle2.png";
image_urls['rain3'] = "http://www.tenshi-no-3p.com/js/common/lib/pixi/asset/particle3.png";
image_urls['rain4'] = "http://www.tenshi-no-3p.com/js/common/lib/pixi/asset/particle4.png";
$(document).ready(function() {
    var c = $(window).width();
    var d = $(window).height();
    var e = function(a, b) {
        return Math.round(a + (Math.random() * (b - a)))
    };
    var f = function(a) {
        setTimeout(function() {
            a.css({
                left: e(0, c) + 'px',
                top: '-30px',
                display: 'block',
                opacity: '0.' + e(10, 100)
            }).animate({
                top: (d - 10) + 'px'
            },
            e(7500, 8000),
            function() {
                $(this).fadeOut('slow',
                function() {
                    f(a)
                })
            })
        },
        e(1, 8000))
    };
    $('<div></div>').attr('id', 'rainDiv').css({
        position: 'fixed',
        width: (c - 20) + 'px',
        height: '1px',
        left: '0px',
        top: '-5px',
        display: 'block'
    }).appendTo('body');
    for (var i = 1; i <= 20; i++) {
        var g = $('<img/>').attr('src', image_urls['rain' + e(1, 4)]).css({
            position: 'absolute',
            left: e(0, c) + 'px',
            top: '-30px',
            display: 'block',
            opacity: '0.' + e(10, 100),
			width: '30',
			height: '30',
            'margin-left': 0
        }).addClass('rainDrop').appendTo('#rainDiv');
        f(g);
        g = null
    };
    var h = 0;
    var j = 0;
    $(window).resize(function() {
        c = $(window).width();
        d = $(window).height()
    })
});

if (typeof jQuery == 'undefined') {
    document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js">');
    document.write('</' + 'script' + '>')
}