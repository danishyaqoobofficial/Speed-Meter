let rotate_box = document.getElementById('rotate_box');
let input_btn = document.getElementById('input-btn');
let inputNumber = document.getElementById('number');
let Error = document.getElementById('error');
let one= document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

inputNumber.addEventListener('keyup', (e) =>{
    if (e.keyCode === 13) {
        if (inputNumber.value === '') {
            inputNumber.classList.add('!border-[#FF0000]');
        }else if (inputNumber.value > 220) {
            Error.innerHTML = 'Your value is too long'
        }else if (inputNumber.value !== '' && inputNumber.value < 221) {
            rotate_box.classList.add(`rotate-[${(inputNumber.value - 38 ) * 1.2}deg]`);
            inputNumber.classList.remove('!border-[#FF0000]');
            Error.innerHTML = ''
        }
    }else{

    }
})

input_btn.addEventListener('click' , () =>{
    if (inputNumber.value === '') {
        inputNumber.classList.add('!border-[#FF0000]');
    }else if (inputNumber.value > 220) {
        Error.innerHTML = 'Your value is too long'
    }else if (inputNumber.value !== '' && inputNumber.value < 221) {
        rotate_box.classList.add(`rotate-[${(inputNumber.value - 38 ) * 1.2}deg]`);
        inputNumber.classList.remove('!border-[#FF0000]');
        Error.innerHTML = ''
    }
})