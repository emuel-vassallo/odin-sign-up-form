const validateForm = () => {
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('confirm_password');

  const passwordInputValue = passwordInput.value;
  const passwordConfirmValue = passwordConfirmInput.value;

  if (passwordInputValue !== passwordConfirmValue) {
    passwordInput.classList.add('error');
    passwordConfirmInput.classList.add('error');
    return false;
  }

  passwordInput.classList.remove('error');
  passwordConfirmInput.classList.remove('error');
  return true;
};
