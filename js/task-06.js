const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const enteredValue = validationInput.value;

  if (enteredValue.length === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
