//event deligate upon all button on the calculator
const pinFeild=document.getElementById('getPin');

document.getElementById('all-button').addEventListener('click',function(event){
    const number=event.target.innerText;
    if(isNaN(number)){
      
        if(number==="C"){
            pinFeild.value=''
        }
        //delete one by one our input pin
        else if(number==='<'){
           const pin=pinFeild.value;
           const arrPin=pin.split('');
           arrPin.pop()
           const pinPop=arrPin.join('')
           pinFeild.value=pinPop;
        }
    }
    else{
        const currentPin=pinFeild.value
        const newPin=currentPin+number;
        pinFeild.value=newPin
       //here == newPin == our getting pin
    }
})