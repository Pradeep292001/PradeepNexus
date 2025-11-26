document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login-section");
    const aboutSection = document.getElementById("about-section");
    const profileSection = document.getElementById("profile-section");
    const profileInfo = document.getElementById("profile-info");
    const logoutBtn = document.getElementById("logout-btn");
    const loginForm = document.getElementById("login-form");

    // Check if user already logged in
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
        // User is logged in → Show about + profile + logout
        showLoggedInUI(loggedUser);
    } else {
        // User not logged in → Show About + Login page
        showLoggedOutUI();
    }

    // Login action
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const user = { email, mobile };

        localStorage.setItem("loggedUser", JSON.stringify(user));
        showLoggedInUI(user);
    });

    // Logout action
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedUser");
        showLoggedOutUI();
    });

    // --- UI Functions ----
    function showLoggedInUI(user) {
        loginSection.style.display = "none";
        aboutSection.style.display = "block";
        profileSection.style.display = "block";
        logoutBtn.style.display = "block";

        profileInfo.innerHTML = `
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Mobile:</strong> ${user.mobile}</p>
        `;
    }

    function showLoggedOutUI() {
        loginSection.style.display = "block";
        aboutSection.style.display = "block";
        profileSection.style.display = "none";
        logoutBtn.style.display = "none";
    }
});
