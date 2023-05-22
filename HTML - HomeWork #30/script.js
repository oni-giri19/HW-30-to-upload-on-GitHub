function calculateAge() {
  const birthYear = document.getElementById("birth-year");
  const birthMonth = document.getElementById("birth-month");
  const birthDay = document.getElementById("birth-day");
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();
  let monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay.value > currentDay) {
    currentDay = currentDay + monthArray[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (birthMonth.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  let d = currentDay - birthDay.value;
  let m = currentMonth - birthMonth.value;
  let y = currentYear - birthYear.value;

  // Check if birth year is valid
  if (birthYear.value > currentDate.getFullYear() || birthYear.value < 1900) {
    birthYear.previousElementSibling.classList.add("invalid-label");
    document.getElementById("invalid-message3").innerHTML =
      "Must be in the past";
  } else {
    birthYear.previousElementSibling.classList.remove("invalid-label");
    document.getElementById("invalid-message3").innerHTML = "";
  }

  // Check if birth month is valid
  if (birthMonth.value > 12 || birthMonth.value < 1) {
    birthMonth.previousElementSibling.classList.add("invalid-label");
    document.getElementById("invalid-message2").innerHTML =
      "Must be a valid month";
  } else {
    birthMonth.previousElementSibling.classList.remove("invalid-label");
    document.getElementById("invalid-message2").innerHTML = "";
  }

  // Check if birth day is valid
  if (birthDay.value > 31 || birthDay.value < 1) {
    birthDay.previousElementSibling.classList.add("invalid-label");
    document.getElementById("invalid-message1").innerHTML =
      "Must be a valid day";
  } else {
    birthDay.previousElementSibling.classList.remove("invalid-label");
    document.getElementById("invalid-message1").innerHTML = "";
  }

  document.getElementById("day-output").innerHTML = d;
  document.getElementById("month-output").innerHTML = m;
  document.getElementById("year-output").innerHTML = y;
}
