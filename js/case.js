// function updateNumber(isIcrease){
//     const inputValue = document.getElementById('case-input');
//     const inputValueString = inputValue.value;
//     const inputValueNumber = parseInt(inputValueString);

//     let newValue;
//     if(isIcrease == true){
//         newValue = inputValueNumber +1;
//     }
//     else{
//         newValue = inputValueNumber -1;
//     }
//     inputValue.value = newValue;
//     return newValue;
// }

// function updatePrices(newValue){
//     const totalPrice = newValue * 59;
//     const perPrices = document.getElementById('case-price');
//     perPrices.innerText = totalPrice;
// }

// document.getElementById('case-btn-plus').addEventListener('click', function(){
//     const newValue = updateNumber(true);
//     updatePrices(newValue);

//     calculateSubtotal();
    
// });

// document.getElementById('case-btn-minus').addEventListener('click', function(){
//    const newValue = updateNumber(false);
//     updatePrices(newValue)

//     calculateSubtotal();
// })


function upDownNumbers(increas){
    const caseInput = document.getElementById('case-input');
    const caseInputString = caseInput.value;
    const caseInputNumber = parseInt(caseInputString);

    let newValue;
    if(increas == true){
        newValue = caseInputNumber +1;
    }
    else{
        newValue = caseInputNumber -1;
    }
    caseInput.value = newValue;
    return newValue;
}

function casePrice(newValue){
    const caseValue = document.getElementById('case-price');
    const casePrice = newValue * 59;
    caseValue.innerText = casePrice;
}

document.getElementById('case-btn-plus').addEventListener('click', function(){
   const newValue = upDownNumbers(true);
    casePrice(newValue);

    calculatePrice();

});

document.getElementById('case-btn-minus').addEventListener('click', function(){
   const newValue = upDownNumbers(false);
    casePrice(newValue);

   calculatePrice();

})