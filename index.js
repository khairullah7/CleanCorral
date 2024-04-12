// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");

const addSignature = () => {
  // Write your code to manipulate the DOM here
  let nameA = document.getElementById("name").value;
  let cityA = document.getElementById("city").value;

  let signature = document.createElement("p");
  signature.textContent = "🖊️ " + nameA + " from " + cityA + " supports this.";

  let signatureSection = document.querySelector(".signatures");
  signatureSection.appendChild(signature);
}


const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }



  if (containsErrors == false) {
    addSignature();
    for (let j = 0; j < petitionInputs.length; j++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

signNowButton.addEventListener('click', validateForm);