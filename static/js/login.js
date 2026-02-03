function validateLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    window.location.href = "/";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
