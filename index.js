function calculateAge() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (isNaN(birthDate.getTime())) {
    document.getElementById("result").innerText = "Please enter a valid date.";
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText = `Your age is ${age} years.`;
}
