
const sliderElement = function(slid){

    const currentState = { index: 0 };

    slid.style.display = "grid";
    slid.style.gridTemplateRows = "9fr 1fr";
    slid.style.gridTemplateAreas = `"view"
                                    "dots"`;

    const photoDisplay = document.createElement('div');
    photoDisplay.style.gridArea = "view";
    const photos = [
        "./slide-photos/carousel-slide-A.png",
        "./slide-photos/carousel-slide-B.png",
        "./slide-photos/carousel-slide-C.png",
        "./slide-photos/carousel-slide-D.png",
    ]
    const photolist =[];
   

    photos.forEach(p =>{
        const img = document.createElement('img');
        img.src = p;
        img.alt = "image slide";
        img.classList.add("carousel-img");
        photoDisplay.appendChild(img);
        photolist.push(img);
    })
    slid.appendChild(photoDisplay);

    
    const dotsCreate= dotSelector(photolist, currentState);
    slid.appendChild(dotsCreate.dotContainer);

    AutoSlider(photolist, currentState , dotsCreate.dots);
    slidOnArrow(photolist, currentState, dotsCreate.dots );
    showImgs(photolist, currentState.index, dotsCreate.dots);

}
const slidOnArrow = function (photos, currentState, dots){
    const leftArrow = document.getElementById('arrow-A');
    const rightArrow = document.querySelector('#arrow-B');

    rightArrow.addEventListener('click',()=>{
        currentState.index = (currentState.index + 1) % photos.length;
        showImgs(photos, currentState.index, dots);
    })    
    leftArrow.addEventListener('click',()=>{
        currentState.index = (currentState.index -1 +photos.length) % photos.length;
        showImgs(photos, currentState.index, dots);

    });
};
const dotSelector = function(photos,currentState){
    const slidBottom =document.createElement('div');
    slidBottom.style.gridArea = "dots";
    slidBottom.style.justifySelf = "center";

    const dots = [];
    photos.forEach((photo, index)=>{
        const dot = document.createElement('div');
;
        dot.innerText = "o";
        dot.style.display= "inline";
        dot.style.padding = "10px";

        slidBottom.appendChild(dot);
        dots.push(dot);

        dot.addEventListener('mouseover', ()=>{
            dot.innerText = "O";
        });
        dot.addEventListener('mouseout', ()=>{
            dot.innerText = "o";
        });
        dot.addEventListener('click',()=>{
            currentState.index = index
            showImgs(photos, index, dots);


        })
    })
    return {dotContainer:slidBottom, dots:dots};
};

const AutoSlider= function (photos,currentState, dots){

    setInterval(()=>{
        currentState.index = (currentState.index + 1) % photos.length;
        showImgs(photos, currentState.index , dots);
    }, 10000);
};
const showImgs = function (photos, selected, dots){
    photos.forEach((p, index) =>{
        p.style.display = "none"
        if(index === selected){
            showImg(p);

        }
    });
    if(dots){
        dots.forEach((dot, index)=>{
            dot.innerText = index === selected ? "O" : "o";
        });
    }
    
};
const showImg = function (photo){

    photo.style.display = "block";
    photo.style.justifySelf = "center";
    photo.style.marginTop = "30%";
    


};
export{
    sliderElement,

}