const department = document.getElementById("department");

document.querySelectorAll(".timeButton").forEach(function (button) {
  button.addEventListener("click", function () {
    var currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    button.textContent = currentTime;
    button.style.color = "black";
    button.style.fontWeight = "bold";
    button.disabled = true; // Optional: Disable the button after showing the time
  });
});

async function displayDepart(e) {
  let department = e.target.value || "bcs";

  try {
    const res = await fetch("http://localhost:3000/api/department", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department,
      }),
    });

    const data = await res.json();

    data?.teachers?.map((teacher) => {
      console.log(teacher.fullname);
    });
  } catch (error) {
    console.log(error);
  }
}

department.addEventListener("change", displayDepart);
