const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");

usernameInput.addEventListener("blur", function () {
  if (usernameInput.value.trim() === "") {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
});

console.log(usernameError,usernameInput);