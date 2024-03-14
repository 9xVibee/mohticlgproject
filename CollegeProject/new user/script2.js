document.getElementById("submit").addEventListener("click", function () {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  var AcademinYear = document.getElementById("academicYear").value;
  var department = document.getElementById("department").value;
  var title = document.getElementById("title").value;
  var fullname = document.getElementById("fullname").value;
  var contact = document.getElementById("contact").value;

  // Perform email validation
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Perform password validation
  if (password.length < 8 || !/[!@#$%^&*()_+]/.test(password)) {
    alert(
      "Please enter a valid password (minimum 8 characters with at least one special character)"
    );
    return;
  }

  fetch("http://localhost:3000/api/create-teacher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //
    },
    body: JSON.stringify({
      fullname,
      email,
      password,
      AcademinYear,
      contact,
      department,
      title,
    }),
  })
    .then(() => {
      console.log("Done!");
    })
    .catch((err) => {
      console.log("Errror", err);
    });

  // If validation passes, redirect to index.html
});

// window.location.href = '../FILL ATTENDANCE/index.html';
