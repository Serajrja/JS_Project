
function randomnumber(){
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256); 
    let randomcolor = `${r}, ${g}, ${b}`;

    let min= 1000;
    let max= 9999;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = document.getElementsByClassName("box");
    result[0].innerHTML = `OTP is :${random}, Color code is : RGB(${randomcolor})`;

    
    document.querySelector(".box").style.backgroundColor = `rgb(${randomcolor})`;
}



 