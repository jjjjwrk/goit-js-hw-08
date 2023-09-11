import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const dataForm = {
    email: '',
    message: ''
};



function dataFormValue (event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

form.addEventListener('input', throttle(dataFormValue, 500));



function submitForm (event) {
    const email = document.querySelector('.feedback-form input');
    if (email.value === ''){
        alert('Заполните поле email');
        return;
    }
    if(JSON.parse(localStorage.getItem('feedback-form-state')) === null){
        return;
      }
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

form.addEventListener('submit', submitForm);

function savingDataFromLocal () {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if(data){
        email.value = data.email;
        message.value = data.message;
    }
};
savingDataFromLocal();



