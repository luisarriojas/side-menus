/*
 Side Menus
 Copyright (c) 2014 Luis Enrique Arriojas
 http://opensource.org/licenses/MIT
 */

var mode = "slide"; //Select a mode: "slide" or "over".

$(".option").click(function () {
    var menu = $(this).attr("menu");
    sideMenu("menu-" + menu);
});

$(".option-close").click(function () {
    sideReset();
});

$("#close-button").click(function () {
    sideReset();
});

function sideMenu(side) {
    var classMenu = $("#" + side).attr("class");

    if (classMenu == "left-menu") { //Actions for left menus.
        var displayMenu = $("#" + side).css("display");
        if (displayMenu == "none") {
            sideReset();
            $("#" + side).css("display", "block");
            $("#close-button").css("display", "block");

            if (mode == "slide") {
                var widthMenu = $("#" + side).outerWidth();
                $("#main").css("left", widthMenu + "px");
                $("#main").css("right", "-" + widthMenu + "px");
            }
        } else {
            sideReset();
        }
    } else if (classMenu == "right-menu") { //Actions for right menus.
        var displayMenu = $("#" + side).css("display");
        if (displayMenu == "none") {
            sideReset();
            $("#" + side).css("display", "block");
            $("#close-button").css("display", "block");

            if (mode == "slide") {
                var widthMenu = $("#" + side).outerWidth();
                $("#main").css("right", widthMenu + "px");
                $("#main").css("left", "-" + widthMenu + "px");
            }
        } else {
            sideReset();
        }
    }
};

function sideReset() {  //Reset both menus to original state.
    var menu = document.getElementById("menu-container").getElementsByTagName("div");

    $.each(menu, function (index, value) {
        $("#" + value.id).css("display", "none");
    });
    $("#close-button").css("display", "none");

    $("#main").css("left", "0px");
    $("#main").css("right", "0px");
};
