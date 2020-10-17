//-Stopwatch

var display = document.querySelector("#display")
var startStopButton = document.querySelector("button")
var minutes = 0
var seconds = 0
var doli = 0
var displayMinutes
var displaySeconds
var displayDoli
var isPaused = true
var intervalId
var laps = document.querySelector("#laps")
var lapNumber = 1
function toggleStart(){
    if(isPaused){
        startStopButton.innerHTML = "Stop"
        intervalId = setInterval(run,10)
    }
    else{
        startStopButton.innerHTML = "Start"
        clearInterval(intervalId)
    }
    isPaused = !isPaused
}
function run(){
    doli++
    if(doli == 100){
        seconds++
        doli=0
}
if(seconds == 60){
    minutes++
    seconds = 0
}
if(seconds < 10){
    displaySeconds = "0"+seconds
}
else{
    displaySeconds = seconds
}
if(minutes < 10){
    displayMinutes = "0"+minutes
}
else{
    displayMinutes = minutes
}
if(doli < 10){
    displayDoli = "0"+doli
}
else{
    displayDoli = doli
}

display.innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayDoli
}

function reset(){
    display.innerHTML = "00:00:00"
    minutes = 0
    seconds = 0
    doli = 0
    laps.innerHTML = ""
    lapNumber = 1
    if(!isPaused){
        toggleStart()

    }
}

function lap(){
    var lapNo = document.createElement("div")
    var lapTime = document.createElement("div")
    lapNo.innerHTML = lapNumber
    lapTime.innerHTML = displayMinutes + ":" + displaySeconds + ":" +displayDoli 
    laps.append(lapNo,lapTime )
    console.log(lapNo, lapTime) 
    lapNumber++
}

//-Changer


 var colors = ["salmon","violet","cornflowerblue","pink","brown"]
 var count = 0
 var colorInput = document.getElementById("colorInput") 
 function changeBackground(){
     document.body.style.backgroundColor = colors[count]
     count++
     if(count == colors.length){
         count = 0
         }
     }
 function addColor(){
     colors.push(colorInput.value)
     count = colors.length - 1
     changeBackground()
     colorInput.value = ""
     }
//-SlideShow

var myImages = ["desktop/img/img1.jpg","desktop/img/img2.jpg","desktop/img/img3.jpg","desktop/img/img4.jpg","desktop/img/img5.jpg"]
var imgElements = document.querySelector(".slideShow img")
var i = 0
var isPaused = false
function togglePause(){
    if(!isPaused){
        clearInterval(intervalId)
    }
    else{
        intervalId = setInterval (myFunction, 1000)
    }
    isPaused = !isPaused
    console.log(intervalId)
}
function myFunction(){
    imgElements.src = myImages[i]
    i++
    if(i == myImages.length){
        i = 0
    }
}
var intervalId = setInterval (myFunction, 1000)

//-Log in log out
		var isloggedin = false
		function login(){
		if(isloggedin){
			alert("you succesfully logged in")
		}else{
			alert("you logged in")
			isloggedin = true
		}
		}
		function logout(){
		if (!isloggedin){
			alert("you succesfully logged out")
		}else{
			alert("you logged out")
			isloggedin = false
		}
    }
//-Calculator

function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 

function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

function clr() 
{ 
    document.getElementById("result").value = "" 
} 

//-BoxEraser
	var clickCounter = 0
    function MyEraser(){
    clickCounter++
    var div1 = document.getElementById("div1")
    var div2 = document.getElementById("div2")
    var div3 = document.getElementById("div3")
    if(clickCounter == 1){
    div2.style.visibility = "visible"
    div3.style.visibility = "visible"
    div1.style.visibility = "hidden"
    }
        else if(clickCounter == 2){
            div1.style.visibility = "visible"
            div2.style.visibility = "hidden"
        }
        else if(clickCounter == 3){
            div3.style.visibility = "hidden"
            div2.style.visibility = "visible"
        }
        else if(clickCounter == 4){
            div3.style.visibility = "visible"
        }
        else if(clickCounter == 5){
            div1.style.visibility = "hidden"
            div2.style.visibility = "hidden"
            div3.style.visibility = "hidden"
            clickCounter = 0
        }
            
        }
//-NumberAdd
var x = 0
function numberadd() {
 x = x + 1
 alert(x)
}


//-ImageSlider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}