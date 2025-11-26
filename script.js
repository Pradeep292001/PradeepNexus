function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

console.log("PradeepNexus Loaded 🚀");
function loginUser() {
    const email = document.getElementById("userEmail").value;

    if (!email) {
        alert("Please enter your email");
        return;
    }

    localStorage.setItem("userEmail", email);

    document.getElementById("loginBox").style.display = "none";
}

window.onload = () => {
    const savedEmail = localStorage.getItem("userEmail");

    if (!savedEmail) {
        document.getElementById("loginBox").style.display = "flex";
    } else {
        document.getElementById("loginBox").style.display = "none";
    }
};


// --- Futuristic Particles Background Animation ---
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "#00eaff";
        ctx.shadowColor = "#00eaff";
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
