//task no.1
function log100No (){
    for(let i=1; i<=100; i++ ){
        if(i%3==0 && i%5==0){
            console.log("Jackpot!")
        }
        else if(i%3==0){
            console.log ("This is divisible by 3");
        }else if(i%5==0){
            console.log("This is divisible by 5")
        }else{
            console.log(i);
        }   
    }
}

log100No();



//task no.2
let btnCon = document.getElementById("buttonContainer");
let btn = document.createElement("button");
btnCon.appendChild(btn);
btn.innerText = "Button";

let imgContainer = document.getElementById("imgContainer");
let img = document.createElement("img");
imgContainer.appendChild(img);

btn.addEventListener("click", ()=>{
    img.src = "jsLogo.jpg";
});
 