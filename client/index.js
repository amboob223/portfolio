document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  const namee = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const body = {
      name: namee.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        namee.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        alert("Your message has been received.");
      } else {
        throw new Error(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  });
});
