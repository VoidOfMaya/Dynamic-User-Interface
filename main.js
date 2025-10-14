import { dropDownMenu } from "./dropdownMenu.js";
import { carousel } from "./carousel.js";

console.log("Script is running");

const maincontainer = document.querySelector('.container');
const btn = document.getElementById('dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown-itm');
dropDownMenu(btn, dropdownItems);
carousel();

maincontainer.style.height = "100%";
maincontainer.style.display = "grid";
maincontainer.style.gridTemplateRows = " 1fr 8fr 1fr";
maincontainer.style.gridTemplateAreas = `"drop-down"
                                         "carousel"
                                         ". "`

btn.style.gridArea = "drop-down";




