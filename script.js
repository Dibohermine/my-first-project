const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Welcome! 🎉";
});