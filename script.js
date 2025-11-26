// Check if already logged in
window.onload = function () {
    let user = localStorage.getItem("loggedUser");
    if (user) {
        showProfile(JSON.parse(user));
    }
};

function login() {
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    if (email === "" || mobile === "") {
        alert("Please fill all fields");
        return;
    }

    let userData = { email: email, mobile: mobile };

    // Save logged user
    localStorage.setItem("loggedUser", JSON.stringify(userData));

    // Count logins
    let count = localStorage.getItem("loginCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("loginCount", count);

    showProfile(userData);
}

function showProfile(user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("profileBox").style.display = "block";

    document.getElementById("userEmail").innerText =
        "Logged in as: " + user.email;

    document.getElementById("loginCount").innerText =
        localStorage.getItem("loginCount");
}

function logout() {
    localStorage.removeItem("loggedUser");
    document.getElementById("profileBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
