$("#body").animate({'opacity': 0}, 1000, function () {
    $(this).text('new text');
}).animate({'opacity': 1}, 1000);
