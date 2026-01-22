let form = document.querySelector(".card");
let dob = document.querySelector("#dob");

let yearsE1 = document.querySelector("#years");
let monthsE2 = document.querySelector("#months");
let daysE3 = document.querySelector("#days");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!dob.value) {
    alert("Please select your date of birth");
    return;
  }

  let birthDate = new Date(dob.value);

  let today = new Date();

  let year = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  let days = today.getDay() - birthDate.getDay();

  if (month < 0) {
    year--;
    month += 12;
  }

  yearsE1.textContent = `Years: ${year}`;
  monthsE2.textContent = `Month: ${month}`;
  daysE3.textContent = `Days: ${days}`;


  form.reset();
});
