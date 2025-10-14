import { dropDownMenu } from "./dropdownMenu.js";

console.log("Script is running");
const btn = document.getElementById('dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown-itm');

dropDownMenu(btn, dropdownItems);