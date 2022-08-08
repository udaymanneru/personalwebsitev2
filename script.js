particlesJS.load("particles-js", "particles.json", function(){
    console.log("Loaded properly")
})



let messageArray = ["Hello!", "My name is Uday", "Welcome to my personal website"]
let message1 = "Hello!<br> My name is Uday <br>Welcome to my website";
let message2 = "My name is Uday"
var animationIndex = 0;
var textPosition = 0;
var speed = 125;
let typewriter1done = false;
let typingSections = document.querySelectorAll(".typinganimation")




function typewriter1(){
    document.getElementById("hello").innerHTML = message1.substring(0, textPosition) + "<span>\u25ae</span>";
    if (textPosition++ != message1.length){
    setTimeout(typewriter1, speed);
    }
    else{
        typewriter1done = true;
        typewriter2;
    }
}





window.addEventListener("load", typewriter1)