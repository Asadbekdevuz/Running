const MIN_TEMP = 10;
const MAX_TEMP = 40;

let elForm = document.querySelector(".form");
let elInput = elForm.querySelector(".form__input");
let elInputChekRain = elForm.querySelector(".form__input-check-1");
let elInputChekHall = elForm.querySelector(".form__input-check-2");

let result = document.querySelector(".result__form");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = Number(elInput.value);
  let inputChekRain = elInputChekRain.checked;
  let inputChekHall = elInputChekHall.checked;

  if (isNaN(inputValue)) {
    result.setAttribute("class", "alert alert-danger")
    result.textContent = "Please Create number!!!"
  }
  else if (inputChekRain && inputChekHall) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "congrulations, but only GYM, because it is raining";
  }
  else if (inputChekRain) {
    result.setAttribute("class", "alert alert-warning");
    result.textContent = "it is a pity, because it is raining";
  }
  else if (inputChekHall) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "Congrulations,if you want GYM ";

    if (inputValue < MIN_TEMP || inputValue > MAX_TEMP) {
      result.setAttribute("class", "alert alert-warning");
      result.textContent = "it is a pity,you can/'t get GYM";
    }
  }
  else if (inputValue < MIN_TEMP || inputValue > MAX_TEMP) {
    result.setAttribute("class", "alert alert-warning");
    result.textContent = "you can't run at all";
  }
  else if (inputValue >= MIN_TEMP && inputValue <= MAX_TEMP) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "you can go for a run";
  }

})

elForm.addEventListener("reset", function (evt2) {
  evt2.preventDefault();

  result.removeAttribute("class", "alert alert-success");
  result.removeAttribute("class", "alert alert-warning");
  result.removeAttribute("class", "alert alert-danger");
  result.textContent = "";
  elInput.value = "";
})