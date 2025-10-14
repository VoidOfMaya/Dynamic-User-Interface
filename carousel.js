import{ sliderElement}from "./slide.js"

const carousel = function (){
    
    const container = document.querySelector('.img-carousel');
    container.style.height = "100%";
    container.style.backgroundColor = "gray";
    container.style.gridArea = "carousel";
    container.style.display = "grid"
    container.style.gridTemplateColumns =  "1fr 8fr 1fr";
    container.style.gridTemplateAreas = `"sideA slid sideB`

    const arrowA = document.createElement('div');
    const arrowB = document.createElement('div');
    const slid = document.createElement('div');

    slid.style.gridArea = "slid";
    arrowA.style.gridArea = "sideA";
    arrowB.style.gridArea= "sideB";

    arrowA.innerHTML = "<";
    arrowB.innerHTML = ">";

    arrowA.style.textAlign = "center";
    arrowA.style.alignContent = "center";

    arrowB.style.textAlign = "center";
    arrowB.style.alignContent = "center";

    container.appendChild(slid);
    container.appendChild(arrowA);
    container.appendChild(arrowB);

    return container;
}

export{
    carousel,
}