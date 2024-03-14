document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  let emailVal = email.value + "";
  if (!emailVal.includes("@")) {
    document.querySelector(".email").classList.remove("none");
    return;
  } else {
    document.querySelector(".email").classList.add("none");
  }

  const password = document.getElementById("password");
  let passVal = password.value;

  if (!checkValidPassword(passVal)) {
    document.querySelector(".pass").classList.remove("none");
    return;
  } else {
    document.querySelector(".pass").classList.add("none");
  }

  window.location.href = "dashboard.html";
});

function checkValidPassword(pass) {
  let isLong = false,
    isSmall = false,
    isCap = false,
    isNum = false;

  console.log(pass);
  if (pass.length > 7) {
    isLong = true;
  }

  for (let i = "A"; i <= "Z"; i++) {
    if (pass.includes(i)) {
      isCap = true;
      break;
    }
  }

  for (let i = "a"; i <= "z"; i++) {
    if (pass.includes(i)) {
      isSmall = true;
      break;
    }
  }

  for (let i = "0"; i <= "9"; i++) {
    if (pass.includes(i)) {
      isNum = true;
      break;
    }
  }

  return isLong && isCap && isNum && isSmall;
}
