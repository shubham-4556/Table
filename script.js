let valueOfN = 1;
const tableContainer = document.getElementById('result');
const enterBtn = document.getElementById('enter');
const inputValue = document.getElementById('inputValue');
const dimOverlay = document.querySelector('.dimOverlay');
const popupCnfrmBtn = document.querySelector('.popup button');

enterBtn.addEventListener('click', () => {
    if (inputValue.value === '')  {
        dimOverlay.classList.toggle('hidden');
        return;
    }

    valueOfN = inputValue.value;

    tableContainer.innerHTML = `
        <p>${valueOfN} * 1 =  ${valueOfN}</p>
        <p>${valueOfN} * 2 = ${valueOfN*2}</p>
        <p>${valueOfN} * 3 = ${valueOfN*3}</p>
        <p>${valueOfN} * 4 = ${valueOfN*4}</p>
        <p>${valueOfN} * 5 = ${valueOfN*5}</p>
        <p>${valueOfN} * 6 = ${valueOfN*6}</p>
        <p>${valueOfN} * 7 = ${valueOfN*7}</p>
        <p>${valueOfN} * 8 = ${valueOfN*8}</p>
        <p>${valueOfN} * 9 = ${valueOfN*9}</p>
        <p>${valueOfN} * 10 = ${valueOfN*10}</p>`;

    tableContainer.classList.add('result-styles');

});

popupCnfrmBtn.addEventListener('click', () => {
    dimOverlay.classList.toggle('hidden');
});