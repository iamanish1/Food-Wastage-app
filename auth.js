// Elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

// Mock User Database
const users = [];

// Toggle Forms
showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Handle Signup
signupBtn.addEventListener("click", () => {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (name && email && password) {
        users.push({ name, email, password });
        alert("Signup successful! Please login.");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    } else {
        alert("Please fill all fields.");
    }
});

// Handle Login
loginBtn.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = "index.html"; // Redirect to calculator page
    } else {
        alert("Invalid email or password.");
    }
});
