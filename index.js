var lenButton = document.querySelectorAll(".drum").length;
// console.log(lenButton)
// var theMusic = new Audio("sounds/crash.mp3")
for(var i = 0;i< lenButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerButton = this.innerHTML;
    // theMusic.play();    

    theSound(innerButton);
    buttonAnimation(innerButton);
    }
    )}

    document.addEventListener("keydown",function(event){
        console.log(event)
        theSound(event.key);
    })

    

    function theSound(key){
        switch (key){
            case "w":
                var crashBGM = new Audio("sounds/crash.mp3");
                crashBGM.play();
                break;
            
            case "a":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            
            case "s":
                var snareBGM = new Audio("sounds/snare.mp3");
                snareBGM.play();
                break;
            
            case "d":
                var tom1BGM = new Audio("sounds/tom-1.mp3");
                tom1BGM.play();
                break;
    
            case "j":
                var tom2BGM = new Audio("sounds/tom-2.mp3");
                tom2BGM.play();
                break;
    
            case "k":
                var tom3BGM = new Audio("sounds/tom-3.mp3");
                tom3BGM.play();
                break;
    
            case "l":
                var tom4BGM = new Audio("sounds/tom-4.mp3");
                tom4BGM.play();
                break;
        }
        buttonAnimation(key);
    }
function buttonAnimation(activekey){
    var pressedKey = document.querySelector("."+activekey);
    pressedKey.classList.add("pressed");
    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    },10)
}
// document.addEventListener(KeyboardEvent,f)

// function add(num1,num2){
//     return num1+num2;
// }
// function subtract(num1,num2){
//     return num1 - num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }

// function calculator(operator,num1,num2){
//     return operator(num1,num2);
// }