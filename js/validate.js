document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("form1Example13");
  const passwordInput = document.getElementById("form1Example23");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Validar correo electrónico
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      valid = false;
      setError(emailInput, "El correo electrónico es requerido");
    } else if (!isValidEmail(emailValue)) {
      valid = false;
      setError(emailInput, "El formato del correo electrónico es inválido");
    } else {
      setSuccess(emailInput);
    }

    // Validar contraseña
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
      valid = false;
      setError(passwordInput, "La contraseña es requerida");
    } else {
      setSuccess(passwordInput);
    }

    if (valid) {
      form.submit();
    }
  });

  function setError(input, message) {
    const formOutline = input.parentElement;
    const errorDisplay = formOutline.querySelector(".error-message");

    if (!errorDisplay) {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.innerText = message;
      formOutline.appendChild(errorElement);
    } else {
      errorDisplay.innerText = message;
    }

    formOutline.classList.add("error");
    formOutline.classList.remove("success");
  }

  function setSuccess(input) {
    const formOutline = input.parentElement;
    const errorDisplay = formOutline.querySelector(".error-message");

    if (errorDisplay) {
      errorDisplay.remove();
    }

    formOutline.classList.add("success");
    formOutline.classList.remove("error");
  }

  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  }
});
