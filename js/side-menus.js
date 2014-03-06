/*
 Side Menus
 Copyright (C) 2014  Luis Enrique Arriojas Catalini

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
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
}

function sideReset() {  //Reset both menus to original state.
    var menu = document.getElementById("menu-container").getElementsByTagName("div");

    $.each(menu, function (index, value) {
        $("#" + value.id).css("display", "none");
    });
    $("#close-button").css("display", "none");

    $("#main").css("left", "0px");
    $("#main").css("right", "0px");
}