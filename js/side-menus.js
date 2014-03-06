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

$(".option").click(function () {
    var menu = $(this).attr("menu");
    sideMenu("menu-" + menu);
});


function sideMenu(side) {
    var classMenu = $("#" + side).attr("class");

    if (classMenu == "left-menu") { //Actions for left menus.
        var displayMenu = $("#" + side).css("display");
        if (displayMenu == "none") {
            sideReset();
            $("#" + side).css("display", "block");

            var widthMenu = $("#" + side).outerWidth();
            $("#main").css("left", widthMenu + "px");
            $("#main").css("right", "-" + widthMenu + "px");
        } else {
            sideReset();
        }
    } else if (classMenu == "right-menu") { //Actions for right menus.
        alert("jojoy");
    }


    /*else if (side == "right-lateral-menu") {//Actions for Right menu.
     if (rightLateral == false) {
     document.getElementById('left-lateral-menu').style.display = "none";
     document.getElementById('right-lateral-menu').style.display = "block";
     document.getElementById('main').style.left = "-" + document.getElementById('right-lateral-menu').offsetWidth + "px";
     document.getElementById('main').style.right = document.getElementById('right-lateral-menu').offsetWidth + "px";
     rightLateral = true;
     } else {
     sideReset();
     }
     }*/
}

function sideReset() {  //Reset both menus to original state.
    var menu = document.getElementById("menu-container").getElementsByTagName("div");

    for (i = 0; i < menu.length; i++) {
        $("#" + menu[i].id).css("display", "none");
    }

    $("#main").css("left", "0px");
    $("#main").css("right", "0px");
}