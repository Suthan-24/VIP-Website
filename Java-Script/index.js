
var sidenav = document.getElementById("sidenav");

function showNavbar(){
   sidenav.style.right = "0";
}

function closeNavbar(){
   sidenav.style.right = "-200px";
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name.length < 3) {
        alert("Please enter a valid name (at least 3 characters).");
        return false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation
    if (phone.length < 9) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Message validation
    if (message.length < 10) {
        alert("Message should be at least 10 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
