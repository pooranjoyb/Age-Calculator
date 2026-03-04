function calculate() {
  const inputValue = document.getElementById("inputDate").value;
  const ageBox = document.getElementById("agebox");

  if (!inputValue) {
    alert("Please select your Date of Birth!!");
    ageBox.value = "ERROR";
    return;
  }

  const birthDate = new Date(inputValue);
  const today = new Date();

  //   Removing Time Portion for accurate comparison
  birthDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  //   Validating Future Date
  if (birthDate >= today) {
    alert("Date of Birth must be earlier than today!!");
    ageBox.value = "ERROR";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjusting Days if -ve
  if (days < 0) {
    months--;

    // Getting no. of days in the previous month
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  // Adjusting months if -ve
  if (months < 0) {
    years--;
    months += 12;
  }

  // Result Formatting
  let parts = [];

  if (years > 0) {
    parts.push(years + (years === 1 ? " Year" : " Years"));
  }

  if (months > 0) {
    parts.push(months + (months === 1 ? " month" : " months"));
  }

  if (days > 0) {
    parts.push(days + (days === 1 ? " day old" : " days old"));
  }

  if (parts.length === 0) {
    parts.push("0 days old");
  }

  ageBox.value = "Your age is " + parts.join(" ");
}