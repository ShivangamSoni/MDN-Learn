/*
  Form Elements DOM Interface:
    1. HTMLButtonElement
    2. HTMLFieldSetElement
    3. HTMLInputElement
    4. HTMLOutputElement
    5. HTMLSelectElement
    6. HTMLTextAreaElement
  
    Most Browsers support the "Constraint Validation API", Which provides some methods & properties on form elements DOM Interface
    Properties
      1. validationMessage: Returns a localized message describing the validation constraints that the controls doesn't satisfy.
      2. validity: Returns a ValidityState object that contains several properties describing the validity state of the element.
          States:
            1. patternMismatch
            2. tooLong
            3. tooShort
            4. rangeOverflow
            5. rangeUnderflow
            6. typeMismatch
            7. valueMissing
            8. valid
      3. willValidate: Returns true if the element will be validated when the form is submitted.
    
    Methods:
      1. checkValidity(): Returns true if the element's value has no validity problems
      2. reportValidity(): Reports invalid field(s) using events. Useful in combination with preventDefault() in an onSubmit event handler
      3. setCustomValidity(message): Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed.
*/

/*
// In this way we can use the default validation & provide a custom message
// Problem with this approach is that the popups are browser dependent & can't be styled
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
*/

// Better approach using "novalidate" form attribute to stop the default validation & validate everything using JS & style errors as intended.
const form = document.querySelector("form");
const email = document.querySelector("#mail");
const error = document.querySelector("#mail + span.error");

const showError = function () {
  if (email.validity.valueMissing) {
    error.textContent = "You need to enter an E-Mail Address.";
  } else if (email.validity.typeMismatch) {
    error.textContent = "Entered Value needs to be an an E-Mail Address.";
  } else if (email.validity.tooShort) {
    error.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  error.className = "error active";
};

email.addEventListener("input", function (e) {
  if (email.validity.valid) {
    error.textContent = "";
    error.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (e) {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});
