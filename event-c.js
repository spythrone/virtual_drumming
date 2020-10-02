var n=document.querySelectorAll(".drum");
for(var i=0;i<n.length;i++){
    n[i].addEventListener("click",function(){
        var x=this.innerHTML;
        Sound(x);
        animation(x);
        
        
    
    })

}

document.addEventListener("keydown",function(event){
    Sound(event.key);
    animation(event.key);
  
})  
function Sound(key){
    switch(key ){
        case "w":   var ad=new Audio("sounds/tom-1.mp3");
                    ad.play();
                    break;
        
        case "a":    var ad=new Audio("sounds/tom-2.mp3");
                    ad.play();
                    break;

        case "s":    var ad=new Audio("sounds/tom-3.mp3");
                    ad.play();
                    break;

        case "d":    var ad=new Audio("sounds/tom-4.mp3");
                    ad.play();
                    break;

        case "j":    var ad=new Audio("sounds/crash.mp3");
                    ad.play();
                    break;

        case "k":    var ad=new Audio("sounds/snare.mp3");
                    ad.play();
                    break;

        default :    var ad=new Audio("sounds/kick-bass.mp3")
                    ad.play();
                    break;
        
    }

}
function animation(key){
   var activebutton= document.querySelector("." + key);
   activebutton.classList.add("pressed");
   setTimeout(function(){
        activebutton.classList.remove("pressed");
   },200);
}
