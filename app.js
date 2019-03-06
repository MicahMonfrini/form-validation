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
  // grab element
  const zip = document.getElementById('zip');
  // regular expression (numbers between 2 and 10 characters)
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  // if the value in the form does not match re parameters
  if(!re.test(zip.value)) {
    // add is-invalid class to the element
    zip.classList.add('is-invalid');
    // if it matches, make sure is-invalid class is removed
  } else {
    zip.classList.remove('is-invalid');
  }
}

function  validateEmail() {

}

function validatePhone() {

}
