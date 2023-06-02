function autoTab(nextField) {
  document.getElementById(nextField).focus();
}

function clearInput(nextField) {
  document.querySelector(".box1").value = "";
  document.querySelector(".box2").value = "";
  document.querySelector(".box3").value = "";
  document.querySelector(".box4").value = "";
  autoTab(nextField);
}

document.querySelector(".reload-btn").addEventListener("click", function () {
  location.href = location.href;
});

// Prevent Reload
let inputData = document.querySelector("#inputField");

function submitForm(event) {
  event.preventDefault();
}
inputData.addEventListener("submit", submitForm);

// Generate ramdom number
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array1 = [];

while (array1.length < 4) {
  let k = Math.floor(Math.random() * numberArray.length);
  let m = numberArray[k];
  array1.push(m);
  numberArray.splice(k, 1);
}
console.log(array1);

// declare input array and push input to array
function myFunction(num) {
  let inputValue = [];
  console.log(inputValue, typeof inputValue);
  for (num = 0; num < 4; num++) {
    let x = document.querySelectorAll(".box")[num].value;
    console.log(x, typeof x);
    inputValue.push(x);
    // console.log(inputValue);
  }
  console.log(inputValue, typeof inputValue);
  // create new Element and compare
  let rightNum = 0;
  let rightOrder = 0;
  for (i = 0; i < 4; i++) {
    if (
      array1.includes(Number(inputValue[i])) &&
      Number(inputValue[i]) == array1[i]
    ) {
      greenBox(i);
      rightNum += 1;
      rightOrder += 1;
    } else if (
      array1.includes(Number(inputValue[i])) &&
      Number(inputValue[i]) !== array1[i]
    ) {
      yellowBox(i);
      rightNum += 1;
    } else {
      incorrectBox(i);
    }
  }

  console.log(rightNum);
  console.log(rightOrder);

  function greenBox(i) {
    let newGreenSpan = document.createElement("span");
    newGreenSpan.classList.add("green", "answer");
    newGreenSpan.textContent = inputValue[i];
    document.querySelector(".empty").appendChild(newGreenSpan);
  }
  function yellowBox(i) {
    let newYellowSpan = document.createElement("span");
    newYellowSpan.classList.add("yellow", "answer");
    newYellowSpan.textContent = inputValue[i];
    document.querySelector(".empty").appendChild(newYellowSpan);
  }
  function incorrectBox(i) {
    let newIncorrectSpan = document.createElement("span");
    newIncorrectSpan.classList.add("gray", "answer");
    newIncorrectSpan.textContent = inputValue[i];
    document.querySelector(".empty").appendChild(newIncorrectSpan);
  }
  let newSpan = document.createElement("span");
  newSpan.textContent = `${rightNum} số đúng và ${rightOrder} vị trí đúng`;
  document.querySelector(".empty").appendChild(newSpan);

  let breakLine = document.createElement("br");
  document.querySelector(".empty").appendChild(breakLine);

  const modalWin = function () {};

  if (inputValue.toString() == array1.toString() && count <= 10) {
    document.querySelector("#modal-box-win").classList.remove("hidden-win");
  } else if (count > 10) {
    document.querySelector("#modal-box-lose").classList.remove("hidden-lose");
  } else if (inputValue.toString() !== array1.toString() && count == 10) {
    document.querySelector("#modal-box-lose").classList.remove("hidden-lose");
  }
  console.log(inputValue.toString(), array1.toString());
}

// Generate play count
let count = 0;
document.querySelector("#submit-btn").addEventListener("click", function () {
  count += 1;
  console.log(count);
});
