// Constante //

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');
const modalBody = document.querySelector('.contact_modal__body');
const modalButton = document.createElement('button');

const errorMessageFirst = document.querySelector('.errorFirstName');
const errorMessageLast = document.querySelector('.errorLastName');
const errorMessageEmail = document.querySelector('.errorEmail');
const errorMessageMsg = document.querySelector('.errorMessage');
const regexEmail = RegExp('^[a-zA-Z0-9.-_]{2,25}[@]{1}[a-zA-Z0-9-_]+[.]{1}[a-z]{2,10}$', 'g');

// Fonction elements du formulaire

function validateFirstname() {
  if (firstName.value === '') {
    errorMessageFirst.textContent = 'prenoms manquant';
    errorMessageFirst.style.fontSize = '12px';
    errorMessageFirst.style.color = 'red';
    firstName.value = '';
    return false;
  } else if(firstName.value.length <2) {
    errorMessageFirst.textContent = 'Veuillez entrer 2 caractères ou plus pour ce champ';
    errorMessageFirst.style.fontSize = '12px';
    errorMessageFirst.style.color = 'red';
    return false;
  } else{
    errorMessageFirst.textContent = '';
  }
  return true;
}

function validateLastname() {
  if (lastName.value === '') {
    errorMessageLast.textContent = 'Nom manquant';
    errorMessageLast.style.fontSize = '12px';
    errorMessageLast.style.color = 'red';

    lastName.value = '';
    return false;
  } else if(lastName.value.length <2) {
    errorMessageLast.textContent = 'Veuillez entrer 2 caractères ou plus pour ce champ';
    errorMessageLast.style.fontSize = '12px';
    errorMessageLast.style.color = 'red';
    return false;
  }
  else{
    errorMessageLast.textContent = '';
  }
  return true;
}

function validateEmail() {
  if (email.value == '') {
    errorMessageEmail.textContent = 'Email manquant';
    errorMessageEmail.style.fontSize = '12px';
    errorMessageEmail.style.color = 'red';
    return false;
  } 
  else if(regexEmail.test(email.value) == false) {
    errorMessageEmail.textContent = 'Adresse e-mail invalide';
    errorMessageEmail.style.fontSize = '12px';
    errorMessageEmail.style.color = 'red';
    return false;
  }
  else{
    errorMessageEmail.textContent = ''; 
  }
  return true;
}

function validateMsg() {
  if (msg.value === '' ) {
    errorMessageMsg.textContent = 'Nom manquant';
    errorMessageMsg.style.fontSize = '12px';
    errorMessageLast.style.color = 'red';
    
    lastName.value = ''
    return false;
  } 
  else if(msg.value.length <2) {
    errorMessageMsg.textContent = 'Veuillez entrer 2 caractères ou plus pour ce champ';
    errorMessageMsg.style.fontSize = '12px';
    errorMessageMsg.style.color = 'red';
    return false;
  }
  else{
    errorMessageLast.textContent = '';
  }
  return true;
}

// Fonction validate //

function validate(e) {
  e.preventDefault();
  const valideFirstname = validateFirstname();
  const valideLastname = validateLastname();
  const valideEmail = validateEmail();
  const valideMessage = validateMsg();
  const soumis = document.querySelector('.button_contact_submit');

  if (valideFirstname && valideLastname && valideEmail && valideMessage.checked) {
    const contentForm = document.createElement('dialog');
    contentForm.className = 'comfirm';

    contentForm.textContent = 'Merci ! Votre réservation a été reçue.';
    contentForm.style.fontSize ='36px';
    contentForm.style.padding ='7.9rem';
    contentForm.style.paddingLeft ='3.5rem';
    contentForm.style.paddingTop ='10rem';
    contentForm.style.margin = '0px';
    contentForm.style.height ='550px';
    contentForm.style.width ='120%';
    contentForm.style.textAlign ='center';

    soumis.addEventListener('click',e =>{
      console.log('soumission du formulaire');
      closeContactModal();
    });
  }
}

// Validation elements Form
function valid() {
  const contactForm1 = document.querySelector('.contact_form');
  contactForm1.addEventListener('submit', validate);
}
