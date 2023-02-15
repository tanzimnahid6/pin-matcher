
//pin Generator function
function randomPin(){
    const randomPin=Math.round(Math.random()*10000);
    return randomPin;
}
//pin length validation
function getPin(){
    const pin=randomPin();
    const pinString=pin+'';
    const pinLength=pinString.length;
    if(pinLength===4){
        return pin;
    }
    else{
        return getPin()
    }
}


//generate pin by click Generate Pin  Button
document.getElementById('pin-generator').addEventListener('click',function(){
    const randomPinFeild=document.getElementById('random-pin-feild');
    const randomPin = getPin()
    randomPinFeild.value=randomPin;

 
    return randomPin;
});

