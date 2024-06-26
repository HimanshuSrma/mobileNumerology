let numberArr = [];
let effectDataArr = englishArr;

$(document).ready(() => {
    $("#bodyContent").load("bodyContent.html");
    showHideDiv("inputDiv", "resultDiv");
});



function find() {
    const numString = $("#numberInput").val();
    if (numString == "" || numString == undefined) {
        return alert("Please enter a valid number");
    } else {
        numberArr = numString.split(",");
    }
    console.log(numString, numberArr);

    var htmlVar = document.getElementById("resultDiv");
    compute();
}

function compute() {
    $(".wrapperDiv").html("");
    numberArr.forEach((element) => {
        pairs = convertToPairs(element);
        occuancePerNum = occurancePair(element);
        pairs = pairs.concat(occuancePerNum);
        console.group(occuancePerNum, pairs);

        const validNum = mustExclude.every((item) => !pairs.includes(item));
        let compound = element
            .split("")
            .reduce((a, b) => Number(a) + Number(b));
        let sum = sumToOneDigit(element);
        let goodCompound = !mustExclude.includes(compound);
        let goodSum =
            sum == 1 || sum == 3 || sum == 5 || sum == 6 ? true : false;
        allGood = validNum && goodCompound && goodSum ? true : false;
        console.group(allGood, validNum, goodCompound, goodSum);
        let allGoodClass =
            allGood == true ? "allGoodClass borderCssCard" : "";
        let html = `
        <div class="col-lg-6 mx-auto mb-4">
          <div class="shadow p-2 m-md-3 h-100 bg-white ${allGoodClass}">
            <div class="shadow mb-3 p-3 ${allGoodClass}">
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

            <div class="row mx-0 shadow p-2 fs-14">`;
                abcd = '';
                pairs.forEach((pair) => {
                    for (let index = 0; index < effectDataArr.length; index++) {
                        const elem = effectDataArr[index];
                        console.log(pair , pair.toString().length);
                        if (pair == elem.combo) {
                            debugger
                            if(abcd ==''){
                                abcd = pair.toString().length > 2 ? `<hr />`:'';
                                html += abcd;
                            }
                            bgClass = elem.type == 0 ? "bg-danger" : elem.type == 1 ? "bg-success" : "bg-warning";
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

function occurancePair(number){
    let digitCount = {};
    // Loop through each digit in the input number and count occurrences.
    for (let i = 0; i < number.length; i++) {
        let digit = number[i];
        digitCount[digit] = (digitCount[digit] || 0) + 1;
    }
    // Construct the string representation of counts
    let combos = Object.keys(digitCount).map(function(digit) {
        if(digitCount[digit] >2){
            return digit.repeat(digitCount[digit])
        }
    });
    return combos.filter(item => item !== undefined).map(item => Number(item));;
}

function sumToOneDigit(num) {
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
