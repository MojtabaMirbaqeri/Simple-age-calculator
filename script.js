let $ = document;
let date = new Date();

//input elements
let dayInput = document.querySelector("#day-input");
let monthInput = document.querySelector("#month-input");
let yearInput = document.querySelector("#year-input");

//inputs container
let dateInputs = Array.from($.querySelectorAll(".date-input"));

//result elements in DOM
let dayRes = $.querySelector(".day-res");
let monthRes = $.querySelector(".month-res");
let yearRes = $.querySelector(".year-res");

//time is past error
let pastError = document.querySelector(".past-error");

//submit button
let submitBtn = $.querySelector(".calc-button");
submitBtn.addEventListener("click", checkForm);

function checkForm() {
  //check the inputs is not empty
  dateInputs.forEach((inputElem) => {
    if (!inputElem.value) {
      inputElem.parentElement.classList.add("requierd-error-show");
    } else {
      inputElem.parentElement.classList.remove("requierd-error-show");
    }
  });
  //check time is in valid format
  let userDate = new Date(`${yearInput.value}/${monthInput.value}/${dayInput.value}`);
  if (userDate == "Invalid Date") {
    alert("Please enter date in valid format!");
  } else if (getDiffDays(date, userDate)) {
    pastError.classList.remove("past-error-show");

    //change total days to years months days and show that
    showResult(getDiffDays(date, userDate));
  } else {
    //time is in past
    pastError.classList.add("past-error-show");
  }
}

function getDiffDays(nowDate, userDate) {
  //check different days
  let diffDays = Math.floor((nowDate - userDate) / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    return diffDays;
  } else {
    return false;
  }
}

function showResult(days) {
  yearRes.innerHTML = Math.floor(days / 365);
  monthRes.innerHTML = Math.floor((days % 365) / 30);
  dayRes.innerHTML = Math.floor((days % 365) % 30);
}
