function validate() {
  let flightcode = document.getElementById("flightcode");
  let fromlocation = document.getElementById("from");
  let destinationlocation = document.getElementById("to");
  let departuretime = document.getElementById("departuretime");
  let arrivaltime = document.getElementById("arrivaltime");
  let capacity = document.getElementById("capacity");
  let countvalue = checkbox();
  if (
    flightcode.value == "" ||
    fromlocation.value == "" ||
    destinationlocation.value == "" ||
    departuretime.value == "" ||
    arrivaltime.value == "" ||
    capacity.value == ""
  ) {
    alert("no blank values allowed");
    return false;
  } else {
    if (departuretime.value < arrivaltime.value) {
      alert("Registration Success");
      return true;
    } else {
      alert("please enter departure time less than arrival time");
      return false;
    }
  }
}
function checkbox() {
  let form = document.getElementById("myform");
  let count = 0;
  for (let i = 0; i < form.formelements.length; i++) {
    if (form.formelements[i].checked == true) {
      count++;
    }
  }
  return count;
}
// let valcheck = checkbox();
// console.log(valcheck);
