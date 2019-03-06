// EVENT LISTENERS

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  // grab element
  const name = document.getElementById('name');
  // regular expression (letters between 2 and 10 characters)
  const re = /^[a-zA-Z]{2,10}$/

  // if the value in the form does not match re parameters
  if(!re.test(name.value)) {
    // add is-invalid class to the element
    name.classList.add('is-invalid');
    // if it matches, make sure is-invalid class is removed
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {

}

function  validateEmail() {

}

function validatePhone() {

}
