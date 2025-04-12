const buttons = document.querySelectorAll('ul > li');
const regions = document.getElementsByTagName('path');
let imgEl = null; 
let selectedRegion = null;

console.log(buttons.length);
buttons.forEach(element => {
    element.addEventListener('click', () => changeFocus(element));
});

function changeFocus(element) {
    //If previous img is present (therefore, zoomed in and selectedRegion is also present), zoom out
    if(imgEl !== null) { 
        //Animating img
        imgEl.style.animation = "zoomout-anim 0.5s 1 ease-out forwards"; 

        //Animating path
        selectedRegion.style.animation = "colordown-anim 0.5s 1 ease-out forwards";
    }

    //Animationg img
    imgEl = element.querySelector(`img`)
    imgEl.style.animation = "zoomin-anim 0.5s 1 ease-out forwards";
    
    //Animating path
    let regionId = element.id;
    let coll = Array.from(regions);

    selectedRegion = coll.filter((region) => region.id === regionId)[0];

    selectedRegion.style.animation = "colorup-anim 0.5s 1 ease-out forwards";
}