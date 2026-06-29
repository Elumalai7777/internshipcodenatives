const form = document.getElementById("contactForm");
const alertBox = document.getElementById("alertBox");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset alert every time button is clicked
    alertBox.className = "";
    alertBox.style.display = "none";

    if (name === "" || email === "" || message === "") {

        alertBox.className = "error";
        alertBox.innerHTML = "⚠ Please fill all fields!";
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000);

        return;
    }

    alertBox.className = "success";
    alertBox.innerHTML = "✅ Message sent successfully!";
    alertBox.style.display = "block";

    form.reset();

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);

});