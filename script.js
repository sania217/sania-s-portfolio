console.log("script loaded");
emailjs.init({
    publicKey: "iWjtnB6epHtrUhacA"
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = document.getElementById("query").value;
    const email = document.getElementById("email").value;

    status.textContent = "Sending...";

    emailjs.send(
        "service_2uzybz7",
        "template_crokknv",
        {
            user_email: email,
            user_query: query
        }
    )
    .then(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        status.textContent = "Failed to send message.";
    });
});