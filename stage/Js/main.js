$(function() {
    "use strict";
    $(".toggle-sidebar").on('click', function() {
        $('.content-area, .sidebar').toggleClass("no-sidebar");
    });

    //toggle Submenu 
    $(".toggle-submenu").on('click', function() {
        $(this).find(".fa-angle-right").toggleClass("down");
        $(this).next('.child-links').slideToggle();
    });

    //open /close full screen
    $(".toggle-fullscreen").on("click", function() {
        $(this).toggleClass('full-screen');
        if ($(this).hasClass("full-screen")) { //page is now full screen
            openFullScreen();
        } else { //page is not full screen
            closeFullscreen();
        }
    });

    //toggle settings
    $('.toggle-settings').on('click', function() {
        $(this).find('i').toggleClass('fa-spin');
        $(this).parent().toggleClass('hide-settings');
    });

    //Switch colors themes
    var themesClasses = [];
    $('.color-options li').each(function() {
        themesClasses.push($(this).data('theme'))
    });
    $('.color-options li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"));
    });

    var elem = document.documentElement;

    function openFullScreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Fire Fox*/
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) { /* Chrome Safari opera*/
            elem.webkitRequestFullScreen();
        } else if (elem.msRequestFullScreen) { /* ie/edge*/
            elem.msRequestFullScreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen) { /* Fire Fox*/
            document.mozCancelFullscreen();
        } else if (document.webkitExitFullscreen) { /* Chrome Safari opera*/
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* ie/edge*/
            document.msExitFullscreen();
        }
    }
});