const department = document.getElementById("department");
const tbody = document.getElementById('tbody')

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

    tbody.innerHTML = ""
    data?.teachers?.map((teacher) => {
      // console.log(teacher.fullname);
      // let thead = document.createElement('thead')
      let tr = document.createElement('tr')
      tr.classList = 'active'
      let td1 = document.createElement('td')
      let btn1 = document.createElement('button')
      btn1.classList = 'timeButton'
      let btn2 = document.createElement('button')
      btn2.classList = 'timeButton'
      let td2 = document.createElement('td')
      let td3 = document.createElement('td')
      let td4 = document.createElement('td')
      
      td1.innerHTML = teacher.fullname
      btn1.innerHTML = 'In'
      btn2.innerHTML = 'Out'
      td4.innerHTML = 'View'
      console.log(teacher.fullname);
      // tr.append(td1,td2,td3,td4)
      td2.appendChild(btn1)
      td3.appendChild(btn2)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tbody.appendChild(tr)

    });
  } catch (error) {
    console.log(error);
  }
}

department.addEventListener("change", displayDepart);
