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
  // regular expression (at least 5 numbers 0-9, with the option of a dash and 4 additional numbers)
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
  // grab element
  const email = document.getElementById('email');
  // regular expression (most characters accepted for personal email, only 2-5 letters for domain)
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  // if the value in the form does not match re parameters
  if(!re.test(email.value)) {
    // add is-invalid class to the element
    email.classList.add('is-invalid');
    // if it matches, make sure is-invalid class is removed
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {

}
