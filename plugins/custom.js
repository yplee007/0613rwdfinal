// scroll to id
$("#lokimenu a, a#scrolltop").click(function () {
    let who = $(this).attr("href");
    let val = $(who).offset().top - $("#lokimenu").innerHeight() + 1;
    $("html").animate(
        { scrollTop: val }, 2000, "swing"
    );
});


spy(); // scroll spy
bgmenu(); //check menu bg

// spy menu
$(window).scroll(() => {
    spy(); // scroll spy
    bgmenu(); //check menu bg
});

$(window).scroll(() => {
    spy(); // scroll spy
    bgmenu(); //check menu bg
});

// 每次螢幕triger
$(window).resize(() => {
    bgmenu(); //check menu bg
});


function spy() {
    let nowat = $(window).scrollTop();
    $('section').each(function () {
        let
            id = $(this).attr('id'),
            offset = $(this).offset().top - $("#lokimenu").innerHeight(),
            height = $(this).innerHeight();

        if (offset <= nowat && nowat < offset + height) {
            $("#lokimenu a").removeClass('active');
            $(`#lokimenu a[href='#${id}']`).addClass('active');
        };
    });
}

function bgmenu() {
    /* 控制 Header's Navbar 的 bg-dark 因 scroll 而變動。*/
    let
        totalw = $(window).innerWidth(),
        nowat = $(window).scrollTop(),
        offset = $("#lokimenu").innerHeight() + 1,
        height = $("#lokislider").innerHeight();
    if (nowat <= height - offset) { //slider 內
        if (totalw >= 976) $("#lokimenu").removeClass("bg-dark");
        else $("#lokimenu").addClass("bg-dark");
        $("#scrolltop").removeClass("shown");
    }
    else { //已脫離
        if (totalw >= 976) $("#lokimenu").addClass("bg-dark");
        $("#scrolltop").addClass("shown");
    }
}


