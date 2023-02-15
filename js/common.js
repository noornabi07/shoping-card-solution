// function getElementPrice(id){
//     const phonePrice = document.getElementById(id);
//     const phonePriceString = phonePrice.innerText;
//     const phonePriceNumber = parseInt(phonePriceString);
//     return phonePriceNumber;
// }

// function getElementById(id, value){
//     const subTotal = document.getElementById(id);
//     subTotal.innerText = value;
// }

// function calculateSubtotal(){
//     const currentPhonePrice = getElementPrice('phone-price');
//     const currentCasePrice = getElementPrice('case-price');
//     const currentSubtotalPrice = currentPhonePrice + currentCasePrice;

//     getElementById('sub-total', currentSubtotalPrice);

//     const taxAmountString = (currentSubtotalPrice * 0.1).toFixed(2);
//     const taxAmount = parseFloat(taxAmountString);
//     getElementById('tax-amount', taxAmount);

//     const currentCost = currentSubtotalPrice + taxAmount;
//     getElementById('finall-total', currentCost);
// }

function getElementPrice(id){
    const elementPrice = document.getElementById(id);
    const elementPriceString = elementPrice.innerText;
    const elementPriceNumber = parseInt(elementPriceString);
    return elementPriceNumber;
}

function setText(id, value){
    const setValue = document.getElementById(id);
    setValue.innerText = value;
}


function calculatePrice(){
    const phoneTotalPrice = getElementPrice('phone-price');
    const caseTotalPrice = getElementPrice('case-price');
    const totalPrice = phoneTotalPrice + caseTotalPrice;
    setText('sub-total', totalPrice);

    const taxAmountString = (totalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setText('tax-amount', taxAmount);

    const CurrentTotal = totalPrice + taxAmount;
    setText('finall-total', CurrentTotal);

}
