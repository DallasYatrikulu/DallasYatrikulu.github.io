document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("giveRideForm");
  const formContainer = document.getElementById("giveRideFormContainer");
  const giveRideBtn = document.getElementById("giveRideBtn");
  const needRideBtn = document.getElementById("needRideBtn");

  // Show form when "Give a Ride" is clicked
  giveRideBtn.addEventListener("click", function (e) {
    e.preventDefault();
    formContainer.style.display = "block";
    formContainer.scrollIntoView({ behavior: "smooth" });
  });

  // Placeholder alert for "Need a Ride"
  needRideBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("'Need a Ride 🙋' page coming soon!");
  });

  // Handle form submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      from: form.from.value,
      to: form.to.value,
      date: form.date.value,
      time: form.time.value,
      seats: form.seats.value,
      notes: form.notes.value
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxJCrftvOYNigGfpnBWEXrK8pODggNLvWf__ZBauhc10nlttf0wwxUwfp4OKfQBN1mX/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        alert("Thank you, Captain! 🧭 Your ride has been logged.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to the sheet. Try again later.");
    }
  });
});
