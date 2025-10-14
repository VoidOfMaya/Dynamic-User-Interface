
const toggleDropdown = function (isHidden, dropdownItems){
    
    const itemsArray = Array.from(dropdownItems);
    console.log(itemsArray);
    itemsArray.forEach(item =>{
        if(!isHidden){
            item.style.display= "none";
        }else{
            item.style.display = "block";

        }
    })     
  
}
const dropDownMenu = function (dropdownBtn, dropdownItems){

    let isHidden = false;     
   
    toggleDropdown(isHidden, dropdownItems);
    dropdownBtn.addEventListener('click', ()=>{
        if( !isHidden){
            isHidden = true;
            toggleDropdown(isHidden, dropdownItems);
        }else{
            isHidden = false;
            toggleDropdown(isHidden, dropdownItems);
        }
    })
}


export {
    dropDownMenu,
}