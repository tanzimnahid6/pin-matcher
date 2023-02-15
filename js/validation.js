//validation match=================
document.getElementById('submit').addEventListener('click',function(){
    const randomPin=document.getElementById('random-pin-feild');
    const randomNumber=randomPin.value;//randomly generate
    

    const   myPin=document.getElementById('getPin');
    const myPinNumber=myPin.value;//my input

    //cheack pin wright or wrong
    const wrongPin=document.getElementById('wrong');
    const rightPin=document.getElementById('right');
    if(randomNumber===myPinNumber){
        rightPin.style.display='block';
        wrongPin.style.display='none';

    }
    else{
        wrongPin.style.display='block';
        rightPin.style.display='none';
    }
   
})