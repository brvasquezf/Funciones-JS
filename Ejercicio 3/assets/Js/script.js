function pintar(){
    if(ele.style.backgroundColor == 'yellow'){
    ele.style.backgroundColor = 'green'
    }   
else{
    ele.style.backgroundColor = 'yellow'
}   
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);
    