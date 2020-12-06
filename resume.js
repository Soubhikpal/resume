var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
        interval=setInterval(scrollVertically,50,targetSection);
    }); 
} 
function scrollVertically(targetSection){
    var targetSectionCordinates = targetSection.getBoundingClientRect(); 
            if(targetSectionCordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50); 
}



/*var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.setAttribute("data-visited", false);
        bar.style.width = 0 + '%';
       // console.log('Bars');
    }
   // console.log('hey');
}

for (var bar of progressBars) {
    initialiseBar(bar);
}

function fillBars(){

    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },5)
    } 
}
function checkScroll(){
    var cordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && cordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }else if(cordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}*/

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);