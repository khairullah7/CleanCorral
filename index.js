let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
  let signature = document.createElement("p");
  signature.textContent = `🖊️  ${person.name}  from  ${person.city} supports this`;

  let signatureSection = document.querySelector(".signatures");
  signatureSection.appendChild(signature);

  toggleModal(person);
}


const validateForm = () => {
  const person = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
  };

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
    addSignature(person);
    for (let j = 0; j < petitionInputs.length; j++) {
      petitionInputs[j].value = "";
      containsErrors = false;
    }
  }
}

function toggleModal(person) {
  let modal = document.getElementById("thanks-modal")
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name} from ${person.city}`;

  let intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    let modalSet = document.getElementById("thanks-modal");
    modalSet.style.display = "none";
    clearInterval(intervalId);
  }, "2000");
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");

function scaleImage() {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

signNowButton.addEventListener('click', validateForm);

let animations = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease"
};

let revealableContainers = document.querySelectorAll(".revealable");

function reveal() {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animations.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



