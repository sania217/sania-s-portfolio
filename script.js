document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = document.getElementById("query").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate fields
    if (!query || !email) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // Encode values (important)
    const subject = encodeURIComponent("Query from Portfolio");
    const body = encodeURIComponent(
      `Message: ${query}\nFrom: ${email}`
    );

    // Inform user before redirect
    alert("Your email app will open. Please click send to complete.");

    // Open mail client
    window.location.href = `mailto:saniyan400@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    form.reset();
  });
});