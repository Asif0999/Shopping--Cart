function product(idname, priceid, inputfield, pricing) {
    const inputField = document.getElementById(inputfield);
    // debugger;
    const insideField = inputField.value;
    const convetToInt = parseInt(insideField);
    if (idname == true) {
        inputField.value = convetToInt + 1;
    } else if (idname == false, convetToInt > 0) {
        inputField.value = convetToInt - 1;
    }
    // phone price update

    const phonePrice = document.getElementById(pricing);
    const newPrice = priceid * inputField.value;
    phonePrice.innerText = newPrice;

    // call lastpart function
    lastPart();

}

// last part function
function lastPart(params) {
    const phonePriceTotal = document.getElementById('phone-price');
    const insidephone = parseInt(phonePriceTotal.innerText);
    const casePriceTotal = document.getElementById('case-price');
    const insidecse = parseInt(casePriceTotal.innerText);
    const totalSub = insidephone + insidecse;
    const totalTax = totalSub / 5;
    const totalAmount = totalSub + totalTax;
    document.getElementById('sub-total').innerText = totalSub;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById('total-amount').innerText = totalAmount;


}







document.getElementById('phone-plus-btn').addEventListener('click',
    function () {
        // debugger;
        product(true, 1000, 'phone-input', 'phone-price');

    });




document.getElementById('phone-minus-btn').addEventListener('click',
    function () {
        product(false, 1000, 'phone-input', 'phone-price');
    });




document.getElementById('case-plus-btn').addEventListener('click',
    function () {
        product(true, 60, 'case-input', 'case-price');
    });





document.getElementById('case-minus-btn').addEventListener('click',
    function () {
        product(false, 60, 'case-input', 'case-price');
    })