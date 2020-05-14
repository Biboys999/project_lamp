window.onload = function(){
    let lightOff = document.querySelector("#loff")
    let lightOn = document.querySelector("#lon")
    let swtOff = document.querySelector("#boff")
    let swtOn = document.querySelector("#bon")
    lightOff.style.display = "none";
    swtOn.style.display = "none";

    swtOn.onclick = function(){ 
        lightOff.style.display = "none";
        swtOn.style.display = "none";
        lightOn.style.display = "inline"; 
        swtOff.style.display = "inline";
        
        }
    
    swtOff.onclick = function(){
        lightOn.style.display = "none";
        swtOff.style.display = "none";
        lightOff.style.display = "inline"; 
        swtOn.style.display = "inline";
    }
    
}



