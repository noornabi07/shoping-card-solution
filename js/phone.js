// function updatePhoneNumber(number){
//     const phoneInputValue = document.getElementById('phone-input');
//     const phoneInputValueString = phoneInputValue.value;
//     const phoneInputValueNumber = parseInt(phoneInputValueString);

//     let newValue;
//     if(number == true){
//         newValue = phoneInputValueNumber +1;
//     }
//     else{
//         newValue = phoneInputValueNumber -1;
//     }
//     phoneInputValue.value = newValue;
//     return newValue;
// }

// function updatePhonePrice(newValue){
//     const phonePerPrice = document.getElementById('phone-price');
//    const totalPrice = newValue * 1219;
//    phonePerPrice.innerText = totalPrice;  
// }



// document.getElementById('phone-btn-plus').addEventListener('click', function(){
//    const newValue = updatePhoneNumber(true);
//     updatePhonePrice(newValue)
//     calculateSubtotal();

// });

// document.getElementById('phone-btn-minus').addEventListener('click', function(){
//    const newValue = updatePhoneNumber(false);
//    updatePhonePrice(newValue);
//    calculateSubtotal()
// })


function upDownNumber(increaseInput){
    const inputText = document.getElementById('phone-input');
    const inputTextString = inputText.value;
    const inputTextNumber = parseInt(inputTextString);
    
    let newValue;
    if(increaseInput == true){
        newValue = inputTextNumber +1;
    }
    else{
        newValue = inputTextNumber -1;
    }
    inputText.value = newValue;
    return newValue;
}

function phonePrices(newValue){
    const totalPrice = newValue * 1219;
   const currentPrice = document.getElementById('phone-price');
   currentPrice.innerText = totalPrice;
}


document.getElementById('phone-btn-plus').addEventListener('click', function(){
   const newValue = upDownNumber(true);
    phonePrices(newValue);

    calculatePrice()
})


document.getElementById('phone-btn-minus').addEventListener('click', function(){
   const newValue = upDownNumber(false);
    phonePrices(newValue);

    calculatePrice()
})