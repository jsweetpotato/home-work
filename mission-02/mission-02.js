const $emailInput = document.querySelector("#email");
const $emailWrapper = document.querySelector(".input-wrapper:nth-child(1)");

const $pwInput = document.querySelector("#password");
const $pwWrapper = document.querySelector(".input-wrapper:nth-child(2)");
const $togglePwType = document.querySelector(".toggle-password-type");

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
  if ($pwInput.value === "")
    $pwWrapper.classList.replace(
      $pwWrapper.classList[STATE_CLASS_POSITION],
      STATE_EMPTY
    );
  else if (
    $pwInput.value.length >= 6 &&
    /\d/.test($pwInput.value) &&
    /[a-zA-Z]/.test($pwInput.value)
  )
    $pwWrapper.classList.replace(
      $pwWrapper.classList[STATE_CLASS_POSITION],
      STATE_VALID
    );
  else
    $pwWrapper.classList.replace(
      $pwWrapper.classList[STATE_CLASS_POSITION],
      STATE_INVALID
    );
};

const togglePasswordVisibility = () => {
  $pwInput.type === "password"
    ? ($pwInput.type = "text")
    : ($pwInput.type = "password");
};

const forKeyboard = (e) => {
  e.stopPropagation();
  if (e.code !== "Space" && e.code !== "Enter") return;
  togglePasswordVisibility();
};

$emailInput.oninput = validateEmail;
$pwInput.oninput = validatePassword;
$togglePwType.onclick = togglePasswordVisibility;
$togglePwType.onkeyup = forKeyboard;
