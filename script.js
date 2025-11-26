function login() {
    const user = document.getElementById("userInput").value;
    const pass = document.getElementById("passwordInput").value;

    if (user === "" || pass === "") {
        alert("Enter Email/Phone and Password");
        return;
    }

    localStorage.setItem("loggedUser", user);
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

// Show user on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    document.getElementById("welcomeUser").innerText =
        "Logged in as: " + localStorage.getItem("loggedUser");
}
