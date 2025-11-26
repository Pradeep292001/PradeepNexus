function login() {
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") {
        alert("Please enter email or mobile number");
        return;
    }

    // Store login state
    localStorage.setItem("loggedIn", "true");

    // Redirect to home page
    window.location.href = "home.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Redirect to login if not logged in
if (window.location.pathname.includes("home.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}
