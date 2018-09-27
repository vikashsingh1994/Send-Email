// Variables
const sendBtn = document.querySelector('#sendBtn'),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message'),
      resetBtn = document.querySelector('#resetBtn'),
      sendEmailForm = document.getElementById('email-form');





// Event Listeners
eventListeners();

function eventListeners() {
    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate fields
    email.addEventListener('blur', validateFields);
    subject.addEventListener('blur', validateFields);
    message.addEventListener('blur', validateFields);

    //reset button click
    resetBtn.addEventListener('click', clearFields);

    //after submit
    sendEmailForm.addEventListener('submit', sendEmail);
}





//Functions

//Initialize
function appInit() {
    // Disable send button
    sendBtn.disabled = true;
}

//Validate fields
function validateFields() {
    
    let errors;

    //validate the length of the fields
    validateLength(this);

    //validate the email fields
    if(this.type === 'email') {
        validateEmail(this);
    }

    //since both fields throw the error then check if error class is present
    errors = document.querySelectorAll('.error');

    //enable the send button if every field is filled
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length == 0) {
            //the button should be enabled
            sendBtn.disabled = false;
        }
    }
}

//Validate length of the field value
function validateLength(field) {
    
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Validate Email
function validateEmail(field) {
    let emailText = field.value;
    //check @ is present or not

    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//clear all fields
function clearFields() {
    // email.value = '';
    // subject.value = '';
    // message.value = '';

    // or u can reset form by reset method
    sendEmailForm.reset();
}

// show gif after sending email

function sendEmail(e) {
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //show the image

    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif'
    sendEmailImg.style.display = 'block';
    
    // Hide the spinner and then show the mail image
     setTimeout(function() {
         
        //Hide the spinner
         spinner.style.display = 'none';

         //show mail image
         document.querySelector('#loaders').appendChild(sendEmailImg);

         //hide and reset the form after 5 sec
         setTimeout(function() {
            //Hide image
            sendEmailImg.style.display = 'none'

            //Reset form
            sendEmailForm.reset();
         }, 5000);

     }, 3000);
}