

//document.querySelector("button").addEventListener("click", handleClick); //finds the first button in our document n then adds an event
//to it that calls the javascript function on click( basically addEventListener takes two parameter 1. an event type 2. a js function)
//this js func is alkso called  listenter. also remember there's no parenthesis on it, its to avoid directcall.
//function handleClick(){         //js func
//	alert("I got clicked");
//}

for(var i = 0;i<7;i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
	//	console.log(this); // this shows the lines related to the class tags drum
                           // on writing, console.log(this.innerHTML), then we get individual character. 
	 	
     //this.style.color="grey";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    	
	});
}

document.addEventListener("keypress", function(event){
	//console.log(event);

	makeSound(event.key);
	buttonAnimation(event.key);
});

//detecting key board press
function makeSound(key){
	 switch(key){
    	case "w": 
    	var audio = new Audio ("sounds/crash.mp3");
    	audio.play();
    	break;

    	case "a": 
    	var audio = new Audio ("sounds/kick-bass.mp3");
    	audio.play();
    	break;

    	case "s": 
    	var audio = new Audio ("sounds/snare.mp3");
    	audio.play();
    	break;

    	case "d": 
    	var audio = new Audio ("sounds/tom-1.mp3");
    	audio.play();
    	break;

    	case "j": 
    	var audio = new Audio ("sounds/tom-2.mp3");
    	audio.play();
    	break;

    	case "k": 
    	var audio = new Audio ("sounds/tom-3.mp3");
    	audio.play();
    	break;

    	case "l": 
    	var audio = new Audio ("sounds/tom-4.mp3");
    	audio.play();
    	break;

    	default:console.log(buttonInnerHTML);

    }


}

function buttonAnimation(currentKey)
{
	var activeButton= document.querySelector("."+ currentKey);
	
	activeButton.classList.add("pressed");

    setTimeout(function(){

    activeButton.classList.remove("pressed");
},100);
}











   