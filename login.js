const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector("#login-input");
const userName = document.querySelector("h1");
const changeButton = document.querySelector("#login-change");
const localUserName = localStorage.getItem("username");
function showElement() {
  loginInput.classList.remove("hide");
  userName.innerText = "";
  changeButton.classList = "hide";
  loginInput.value = "";
}
function greeting(e) {
  e.preventDefault();
  const userProfile = loginInput.value;
  localStorage.setItem("username", userProfile);
  userName.innerText = userProfile;
  loginInput.classList = "hide";
  changeButton.classList.remove("hide");
}
if (localUserName !== null) {
  userName.innerText = localUserName;
  loginInput.classList = "hide";
} else {
  changeButton.classList = "hide";
}
loginForm.addEventListener("submit", greeting);
changeButton.addEventListener("click", showElement);
