// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number of Slider
var slideCount = sliderImages.length;
// console.log(slideCount);

// Set Courent Slide
var currentSlide = 1;

// Slide Number  Element
var slideNumberElment = document.getElementById('slider-number');

// Previous & Next Buttons
var nextButton = document.getElementById("next"),
    prevButton = document.getElementById("prev");

// Handle click on prev or next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var indicatorsElment = document.createElement('ul');

// set id on Create Element
indicatorsElment.setAttribute('id','indicators-ul');

// creat list items based on slider count
for (var i = 1 ; i <= slideCount; i++) {
    
    //creat the li 
    var indicatorsItems = document.createElement('li');

    // set custom Attribute
    indicatorsItems.setAttribute('data-index',i);

    // set items content
    indicatorsItems.appendChild(document.createTextNode(i));

    // Append items to tha main Ul List
    indicatorsElment.appendChild(indicatorsItems);
}

// Add THe created Ul Element to Page
document.getElementById("indicators").appendChild(indicatorsElment);

// Get the New Created Ul
var indicatorCreatUl = document.getElementById("indicators-ul");

// Get indicators Items | Array.from [ES6 Feature]
var indicatorsBullets = Array.from(document.querySelectorAll('#indicators-ul li'));

// loop though All Bullets Items
for (var i = 0 ; i < indicatorsBullets.length; i++){
    indicatorsBullets[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// trigger  theChecker funcation
theChecker();



// Next slide Funcation
function nextSlide(){
    if (nextButton.classList.contains('disable')){
        return false

    }else {
        currentSlide++;
        theChecker();

    }
   

}

// prev slide Funcation
function prevSlide(){
    if (prevButton.classList.contains('disable')){
        return false

    }else {
        currentSlide--;
        theChecker();

    }
}

// create the checker Funcation

function theChecker() {

    //Set the slide Number
    slideNumberElment.textContent = "slide #" + (currentSlide) + "of" + (slideCount);
   
    // remove All Active Classes
    removeAllActive();

    // set activ class on current slide
    sliderImages[currentSlide -1].classList.add("active");

    // set activ class on current indicators Items
    indicatorCreatUl.children[currentSlide -1].classList.add("active");
    

    // Check if current slide is the fisrt
    if(currentSlide==1){
        //Add Disabled Class on prev buttom
        prevButton.classList.add('disable');

    }else{
        prevButton.classList.remove('disable');
    }

    // Check if current slide is the last
    if(currentSlide == slideCount){
        //Add Disabled Class on next buttom
        nextButton.classList.add('disable');

    }else{
        nextButton.classList.remove('disable');
    }


}

// Remove All Active Class from Images and indicators 
function removeAllActive(){
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    });

// loop through indicatorsBullets
indicatorsBullets.forEach(function(bullets){
    bullets.classList.remove("active");


});
}

