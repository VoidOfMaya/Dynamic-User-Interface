
const sliderElement = function(slid){

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

    showImg(photolist, 0);
    const dots = dotSelector(photolist);
    slid.appendChild(dots);
    AutoSlider(photolist);


}
const dotSelector = function(photos){
    const slidBottom =document.createElement('div');
    slidBottom.style.gridArea = "dots";
    slidBottom.style.justifySelf = "center";
    photos.forEach((photo, index)=>{
        const dot = document.createElement('div');
        dot.innerText = "o";
        dot.style.display= "inline";
        dot.style.padding = "10px";

        dot.addEventListener('mouseover', ()=>{
            dot.innerText = "O";
        });
        dot.addEventListener('mouseout', ()=>{
            dot.innerText = "o";
        });
        dot.addEventListener('click',()=>{
            showImg(photos, index);
        })
        
        slidBottom.appendChild(dot);
    })
    return slidBottom
}
const AutoSlider= function (photos,selected){
    if(selected == undefined){
        selected = 0;
    }
    setInterval(()=>{
        selected = (selected + 1) %photos.length;
        showImg(photos, selected);
    }, 5000);
}

const showImg = function (photos, selected){

    console.log(photos);
    photos.forEach((p, index) =>{
        p.style.display = "none"
        if(index === selected){
            console.log(p);
            p.style.display = "block";
            p.style.justifySelf = "center";
            p.style.marginTop = "30%";
        }
    })

}
export{
    sliderElement,

}