// const numberInputs = document.querySelectorAll('input[type=text]');
// numberInputs.forEach(input => {
//     input.addEventListener('blur', function() {
//         if (this.value){
//             this.classList.add('visited');
//         }
//         else{
//             this.classList.remove('visited');
//         }
//     });
// });

let timeoutID;
function waiting() {
    timeoutID = setTimeout(function() {
        document.querySelector('#waiting-warning').innerHTML = "uzupełnij wartości";
    }, 3000);
}
function resetTimeout() {
    clearTimeout(timeoutID);
    waiting();
}
window.addEventListener('input', resetTimeout);
window.addEventListener('click', resetTimeout);

function adjustInputWidths() {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        const unit = input.querySelector('.unit'); 
        const inputField = input.querySelector('input');

        if (unit && inputField) {
            inputField.style.width = `calc(250px - ${unit.offsetWidth}px)`;
        }
    });
}
document.addEventListener('DOMContentLoaded', adjustInputWidths);