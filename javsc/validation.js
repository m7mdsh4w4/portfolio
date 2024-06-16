
const emailRegex = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
function validateEmail(){
    var email = document.getElementById("email").value;
  if(email.trim()== ""|| !emailRegex.test(email)){ 
  return false;
  }
  else{
     return true;
  }
}

function validateFirstname(){
  var firstname = document.getElementById("firstname").value;
    if(firstname.trim()==""){
      return false;
    }else{return true;}
}

function validateLastname(){
  var lastname = document.getElementById("lastname").value;
    if(lastname.trim()==""){
      return false;
    }else{return true;}
}
// function validateMessage(){
//   var message = document.getElementById("message").value;
//     if(message.trim()==""){
//       return false;
//     }else{return true;}
// }

function validate(){
  return validateEmail() && validateFirstname() && validateLastname() && validateMessage();
}




document.getElementById('submit').addEventListener('click', function (event) {
   
   const isFirstNameValid = validateFirstname();
   const firstnameError = document.getElementById('firstname-error');
   const firstnameInput = document.getElementById('firstname');

   if (!isFirstNameValid) {
       firstnameInput.classList.add('is-invalid');
       firstnameError.style.display = 'block';
       firstnameError.textContent = 'Lütfen adınızı girin.'; // Clearer error message
  }
   else {
  firstname.classList.remove('is-invalid');
  firstnameError.style.display = 'none'; // If first name is valid, execute the specified action
  }
});

document.getElementById('submit').addEventListener('click', function (event) {
  const isLastNameValid = validateLastname();
  const lastnameError = document.getElementById('lastname-error');
  const lastnameInput = document.getElementById('lastname');

  if (!isLastNameValid) {
    lastnameInput.classList.add('is-invalid');
    lastnameError.style.display = 'block';
    lastnameError.textContent = 'Lütfen soyadınızı girin.'; // Clearer error message
  }
  else {
  lastname.classList.remove('is-invalid');
  lastnameError.style.display = 'none'; // If first name is valid, execute the specified action
  }
});


document.getElementById('submit').addEventListener('click', function (event) {
  const isMessageValid = validateMessage();
   const messageError = document.getElementById('message-error');
   const messageInput = document.getElementById('message');

  if (!isMessageValid) {
    messageInput.classList.add('is-invalid');
    messageError.style.display = 'block';
    messageError.textContent = 'Lütfen mesaj girin.'; // Clearer error message
  }
  else {
  message.classList.remove('is-invalid');
  messageError.style.display = 'none'; // If first name is valid, execute the specified action
  }
});


document.getElementById('submit').addEventListener('click', function (event) {
  const isemailValid = validateEmail();
   const emailError = document.getElementById('email-error');
   const emailInput = document.getElementById('email');

  if (!isemailValid) {
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
    emailError.textContent = 'Lütfen geçerli bir e-posta adresi girin.'; // Clearer error email
  }
  else {
  email.classList.remove('is-invalid');
  emailError.style.display = 'none'; // If first name is valid, execute the specified action
  }
});


document.getElementById('firstname').addEventListener('keyup', function () {
   const firstnameError = document.getElementById('firstname-error');
  const firstnameInput = document.getElementById('firstname');
  
   if (firstnameInput.value.trim() === "") {
       firstnameInput.classList.add('is-invalid');
      firstnameError.style.display = 'block';
      firstnameError.textContent = 'Lütfen adınızı girin.';
  } else {
       firstnameInput.classList.remove('is-invalid');
      firstnameError.style.display = 'none';
  }
});

document.getElementById('lastname').addEventListener('keyup', function () {
  const lastnameError = document.getElementById('lastname-error');
 const lastnameInput = document.getElementById('lastname');
 
  if (lastnameInput.value.trim() === "") {
      lastnameInput.classList.add('is-invalid');
     lastnameError.style.display = 'block';
     lastnameError.textContent = 'Lütfen soyadınızı girin.';
 } else {
     lastnameInput.classList.remove('is-invalid');
     lastnameError.style.display = 'none';
 }
});

// document.getElementById('message').addEventListener('keyup', function () {
//   const messageError = document.getElementById('message-error');
//  const messageInput = document.getElementById('message');
 
//   if (messageInput.value.trim() === "") {
//       messageInput.classList.add('is-invalid');
//      messageError.style.display = 'block';
//      messageError.textContent = 'Lütfen mesaj girin.';
//  } else {
//      messageInput.classList.remove('is-invalid');
//      messageError.style.display = 'none';
//  }
// });

email.addEventListener('keyup', function () {
  const emailError = document.getElementById('email-error');
  const emailInput = document.getElementById('email'); 
  if (!emailRegex.test(emailInput.value)) {
    email.classList.add('is-invalid');
    emailError.style.display = 'block';
    emailError.textContent = 'Lütfen geçerli bir e-posta adresi girin.'; // Clearer error message
  } else {
    email.classList.remove('is-invalid');
    emailError.style.display = 'none';
  }
});