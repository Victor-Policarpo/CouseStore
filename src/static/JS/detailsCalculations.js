const quantityInput = document.getElementById('quantity-input');
const unitPriceElement = document.getElementById('unit-price');
const totalDisplay = document.getElementById('total-display');

const unitPrice = parseFloat(unitPriceElement.getAttribute('data-price'));

quantityInput.addEventListener('input', () => {
    let quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) quantity = 0;

    const total = (unitPrice * quantity).toFixed(2);
    totalDisplay.innerText = `R$ ${total.replace('.', ',')}`;
});
