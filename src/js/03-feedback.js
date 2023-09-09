import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const dataForm = {};



function dataFormValue (event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

form.addEventListener('input', throttle(dataFormValue, 500));



function submitForm (event) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

form.addEventListener('submit', submitForm);


