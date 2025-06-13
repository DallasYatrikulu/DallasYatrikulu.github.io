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

  // On form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("Thank you, Captain! 🧭 We'll get your crew shortly.");
    form.reset();
  });
});
