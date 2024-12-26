let numberArr = [];
let dobString = "";
let effectDataArr = englishArr;

$(document).ready(() => {
  $("#bodyContent").load("bodyContent.html");
  showHideDiv("inputDiv", "resultDiv");
});

function find() {
  fullName = $("#name").val();
  currentNumber = $("#currentNumber").val();
  email = $("#email").val();
  dobString = $("#dobInput").val();
  newNumbers = $("#numberInput").val();
  contactPermissionCheckbox = $("#contactPermissionCheckbox").is(":checked");

  if (fullName == "" || fullName == undefined) {
    return toast("Please enter your Name");
  }
  if (currentNumber == "" || currentNumber == undefined) {
    return toast("Please enter your Current Number ");
  }
  if (email == "" || email == undefined) {
    return toast("Please enter your Email");
  }
  if (dobString == "" || dobString == undefined) {
    return toast("Please enter Date of Birth");
  }

  if (newNumbers == "" || newNumbers == undefined) {
    return toast("Please enter a valid number");
  } else {
    numberArr = newNumbers.split(",");
    numberArr.unshift(currentNumber);
  }

  // console.log(newNumbers, numberArr , dobString);

  var htmlVar = document.getElementById("resultDiv");
  let data = {
    "Full Name": fullName,
    Email: email,
    "Mobile Number": currentNumber,
    DOB: dobString,
    "Other Numbers": numberArr,
    "Contact Permission": contactPermissionCheckbox ? "Yes" : "No",
  };
  fetch("https://formspree.io/f/xjkkvezg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred.");
    });
  compute();
}

function compute() {
  $(".wrapperDiv").html("");
  // Example usage
  // const dob = "1990-12-25"; // Replace with actual date of birth
  const { mulank, bhagyank } = calculateDobSums(dobString);
  // console.log({ mulank, bhagyank });
  numberArr.forEach((element) => {
    pairs = convertToPairs(element);
    occuancePerNum = occurancePair(element);
    pairs = pairs.concat(occuancePerNum);
    // console.group("...>>>",occuancePerNum, pairs);
    const validNum = mustExclude.every((item) => !pairs.includes(item));
    let compound = element.split("").reduce((a, b) => Number(a) + Number(b));
    let sum = sumToOneDigit(element);
    let goodCompound = !mustExclude.includes(compound);
    let goodSum = sum == 1 || sum == 3 || sum == 5 || sum == 6 ? true : false;
    let vedicSum = sum == mulank || sum == bhagyank ? true : false;
    debugger;
    let allGood = validNum && goodCompound && goodSum ? true : false;
    // console.group(allGood, validNum, goodCompound, goodSum);
    let allGoodClass = allGood == true ? "allGoodClass borderCssCard" : "";
    // Call the function
    console.log(element, mulank, bhagyank);

    const { mulankCount, bhagyankCount } = countMulankAndBhagyankOccurance(
      element,
      mulank,
      bhagyank
    );
    // Determine HS bibraton
    let vedicVibration =
      mulankCount >= 3 ||
      bhagyankCount >= 3 ||
      mulankCount + bhagyankCount >= 4;
    let html = `
        <div class="col-lg-6 mx-auto mb-4">
            <div class="shadow p-2 m-md-3 h-100 bg-white"> <!-- ${allGoodClass} -->
                <div class="shadow mb-3 p-3"> <!-- ${allGoodClass} -->
                    <span class="top"></span><span class="right"></span><span class="bottom"></span><span class="left"></span>
                    <div class="row mx-0 text-center">
                        <h3 class="col-12">${element}</h3>
                        <div class="col-12 m-auto">
                            <div class="row mx-0 my-auto">
                                <div class="col-5 px-0 h5 mb-0">Compound</div>
                                <div class="col-2 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-5 h6 my-auto mb-0 text-italic">${compound}</div>
                            </div>
                        </div>
                        <div class="col-12 m-auto">
                            <div class="row mx-0 my-auto">
                                <div class="col-5 px-0 h5 mb-0">Sum</div>
                                <div class="col-2 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-5 h6 my-auto mb-0 text-italic">${sum}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shadow mb-3 p-3">
                    <div class="row mx-0">
                        <div class="col-12 m-auto mb-3">
                            <div class="row mx-0 my-auto">
                                <div class="col-9 px-0 h5 mb-0">General Vibration</div>
                                <div class="col-1 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-2 h6 my-auto mb-0 text-italic text-end">
                                    <img class="w-100" style="max-width:25px;" src="${
                                      validNum
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s"
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png"
                                    }" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 m-auto mb-3">
                            <div class="row mx-0 my-auto">
                                <div class="col-9 px-0 h5 mb-0">General</div>
                                <div class="col-1 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-2 h6 my-auto mb-0 text-italic text-end">
                                    <img class="w-100" style="max-width:25px;" src="${
                                      allGood
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s"
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png"
                                    }" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 m-auto mb-3">
                            <div class="row mx-0 my-auto">
                                <div class="col-9 px-0 h5 mb-0">Vedic Sum</div>
                                <div class="col-1 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-2 h6 my-auto mb-0 text-italic text-end">
                                    <img class="w-100" style="max-width:25px;" src="${
                                      vedicSum
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s"
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png"
                                    }" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 m-auto mb-3">
                            <div class="row mx-0 my-auto">
                                <div class="col-9 px-0 h5 mb-0">Vedic Vibration</div>
                                <div class="col-1 px-0 h5 mb-0 text-center">:</div>
                                <div class="col-2 h6 my-auto mb-0 text-italic text-end">
                                    <img class="w-100" style="max-width:25px;" src="${
                                      vedicVibration
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s"
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png"
                                    }" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="row mx-0 shadow p-2 fs-14">`;
    abcd = "";
    pairs.forEach((pair) => {
      for (let index = 0; index < effectDataArr.length; index++) {
        const elem = effectDataArr[index];
        // console.log(pair , pair.toString().length);
        if (pair == elem.combo) {
          // debugger
          if (abcd == "") {
            abcd = pair.toString().length > 2 ? `<hr />` : "";
            html += abcd;
          }
          bgClass =
            elem.type == 0
              ? "bg-danger"
              : elem.type == 1
              ? "bg-success"
              : "bg-warning";
          html += `<div class="col-2 col-md-1 text-center ps-0 px-1 my-auto">
                                        <div class="shadow py-2 px-1 fs-12 ${bgClass}">${pair}</div>
                                    </div>
                                    <div class="col-10 col-md-11 pe-0 px-1">
                                        <div class="shadow p-2 mb-3">${elem.effect}</div>
                                    </div>`;
        }
      }
    });
    html += `</div>
          </div>
        </div>`;
    $(".wrapperDiv").append(html);
    showHideDiv("resultDiv", "inputDiv");
  });
}

function occurancePair(number) {
  let digitCount = {};
  console.group("number", number);

  // Loop through each digit in the input number and count occurrences.
  for (let i = 0; i < number.length; i++) {
    let digit = number[i];
    digitCount[digit] = (digitCount[digit] || 0) + 1;
  }
  // Construct the string representation of counts
  let combos = Object.keys(digitCount).map(function (digit) {
    console.info(digit, digitCount[digit]);
    if (digitCount[digit] > 2) {
      return digit.repeat(digitCount[digit]);
    }
  });
  return combos
    .filter((item) => item !== undefined)
    .map((item) => Number(item));
}

function countMulankAndBhagyankOccurance(numStr, mulank, bhagyank) {
  let mulankCount = 0;
  let bhagyankCount = 0;
  const mulankStr = mulank.toString();
  const bhagyankStr = bhagyank.toString();

  // Iterate through the number
  for (const char of numStr) {
    if (char === mulankStr) mulankCount++;
    if (char === bhagyankStr) bhagyankCount++;
  }

  console.log(mulankCount, bhagyankCount, numStr, mulank, bhagyank);
  return { mulankCount, bhagyankCount };
}

function sumToOneDigit(num) {
  console.log(num);

  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}

function calculateDobSums(dob) {
  const [yyyy, mm, dd] = dob.split("-").map(Number);
  const mulank = sumToOneDigit(dd);
  const bhagyank = sumToOneDigit(dd + mm + yyyy);
  return { mulank, bhagyank };
}

function changeLang() {
  let lan = $(".engLan").val();
  lan = lan == "true" ? true : false;
  console.log(typeof lan);
  $(".engLan").val(!lan);
  effectDataArr = lan == true ? englishArr : hindiArr;
  compute();
}

function reset() {
  $("#numberInput").val("");
  $(".wrapperDiv").html("");
  showHideDiv("inputDiv", "resultDiv");
}

function showHideDiv(show, hide) {
  $(`#${show}`).show();
  $(`#${hide}`).hide();
}

function toast(message) {
  var snackbar = document.getElementById("snackbar");
  snackbar.innerText = message;
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
