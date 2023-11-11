const $emailInput = document.querySelector("#email");
const $emailWrapper = document.querySelector(".input-wrapper:nth-child(1)");

const $passwordInput = document.querySelector("#password");
const $passwordWrapper = document.querySelector(".input-wrapper:nth-child(2)");
const $togglePasswordType = document.querySelector(".toggle-password-type");

const STATE_CLASS_POSITION = 1;
const STATE_EMPTY = "empty";
const STATE_VALID = "valid";
const STATE_INVALID = "invalid";

const validateEmail = () => {
  if ($emailInput.value === "")
    $emailWrapper.classList.replace(
      $emailWrapper.classList[STATE_CLASS_POSITION],
      STATE_EMPTY
    );
  else if ($emailInput.checkValidity())
    $emailWrapper.classList.replace(
      $emailWrapper.classList[STATE_CLASS_POSITION],
      STATE_VALID
    );
  else
    $emailWrapper.classList.replace(
      $emailWrapper.classList[STATE_CLASS_POSITION],
      STATE_INVALID
    );
};

const validatePassword = () => {
  if ($passwordInput.value === "")
    $passwordWrapper.classList.replace(
      $passwordWrapper.classList[STATE_CLASS_POSITION],
      STATE_EMPTY
    );
  else if (
    $passwordInput.value.length >= 6 &&
    /\d/.test($passwordInput.value) &&
    /[a-zA-Z]/.test($passwordInput.value)
  )
    $passwordWrapper.classList.replace(
      $passwordWrapper.classList[STATE_CLASS_POSITION],
      STATE_VALID
    );
  else
    $passwordWrapper.classList.replace(
      $passwordWrapper.classList[STATE_CLASS_POSITION],
      STATE_INVALID
    );
};

const togglePasswordVisibility = () => {
  $passwordInput.type === "password"
    ? ($passwordInput.type = "text")
    : ($passwordInput.type = "password");
};

const forKeyboard = (e) => {
  e.stopPropagation();
  if (e.code !== "Space" && e.code !== "Enter") return;
  togglePasswordVisibility();
};

$emailInput.oninput = validateEmail;
$passwordInput.oninput = validatePassword;
$togglePasswordType.onclick = togglePasswordVisibility;
$togglePasswordType.onkeyup = forKeyboard;
