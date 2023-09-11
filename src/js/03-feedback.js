import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const dataForm = {
    email: '',
    message: ''
};
const key = 'feedback-form-state';

document.querySelector('.feedback-form input[name="email"]').value = dataForm.email;
document.querySelector('.feedback-form textarea[name="message"]').value = dataForm.message;


function dataFormValue (event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem(key, JSON.stringify(dataForm));
}

form.addEventListener('input', throttle(dataFormValue, 500));

function submitForm (event) {
    if (dataForm.email === '' && dataForm.message === ''){
        alert('Заполните все поля');
        return;
    }
    console.log(JSON.parse(localStorage.getItem(key)));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(key);
}

form.addEventListener('submit', submitForm);


function savingData() {
    const data = JSON.parse(localStorage.getItem(key));
    const email = document.querySelector('.feedback-form input[name="email"]');
    const message = document.querySelector('.feedback-form textarea[name="message"]');
    if(data){
        email.value = data.email;
        message.value = data.message;
    }
    localStorage.removeItem(key);
}

savingData();   
