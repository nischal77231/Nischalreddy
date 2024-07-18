let counterElement = document.getElementById("counterValue");

function onDecrement(){

     let value = counterElement.textContent;
     let updatedElement = parseInt(value) - 1;
     counterElement.textContent = updatedElement;

     if(updatedElement > 0){
        counterElement.style.color="green"
     }
     else if(updatedElement < 0){
        counterElement.style.color="red"
     }
     else{
        counterElement.style.color="black"
     }

}

function onIncrement(){
    let value = counterElement.textContent;
    let updatedElement = parseInt(value) + 1;
    counterElement.textContent = updatedElement;
    
    if(updatedElement > 0){
        counterElement.style.color="green"
     }
     else if(updatedElement < 0){
        counterElement.style.color="red"
     }
     else{
        counterElement.style.color="black"
     }
}

function onReset(){
     let updatedElement = 0;
     counterElement.textContent = updatedElement;

     if(updatedElement > 0){
        counterElement.style.color="green"
     }
     else if(updatedElement < 0){
        counterElement.style.color="red"
     }
     else{
        counterElement.style.color="black"
     }


}