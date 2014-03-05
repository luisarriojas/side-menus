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
leftLateral = false;
rightLateral = false;

function lateralMenu(side) {
    if (side == "left-lateral-menu") {//Actions for Left menu.
        if (leftLateral == false) {
            document.getElementById('left-lateral-menu').style.display = "block";
            document.getElementById('right-lateral-menu').style.display = "none";
            document.getElementById('main').style.left = document.getElementById('left-lateral-menu').offsetWidth + "px";
            document.getElementById('main').style.right = "-" + document.getElementById('left-lateral-menu').offsetWidth + "px";
            leftLateral = true;
        } else {
            lateralReset();
        }
    } else if (side == "right-lateral-menu") {//Actions for Right menu.
        if (rightLateral == false) {
            document.getElementById('left-lateral-menu').style.display = "none";
            document.getElementById('right-lateral-menu').style.display = "block";
            document.getElementById('main').style.left = "-" + document.getElementById('right-lateral-menu').offsetWidth + "px";
            document.getElementById('main').style.right = document.getElementById('right-lateral-menu').offsetWidth + "px";
            rightLateral = true;
        } else {
            lateralReset();
        }
    }
}

function lateralReset() {//Reset both menus to original state.
    document.getElementById('left-lateral-menu').style.display = "none";
    document.getElementById('right-lateral-menu').style.display = "none";
    document.getElementById('main').style.left = "0px";
    document.getElementById('main').style.right = "0px";
    leftLateral = false;
    rightLateral = false;
}