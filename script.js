let countryname = 'Pakistan';
let cityname = 'karachi';
let nationalflag = 'greenandwhite';
let nationalgame = 'hockey';
let nationalflower = 'jasmine';
let score = 0;

function pakistan() {
    let correct = document.querySelector("#pakistan").checked;
    if (correct == true) {
        score += 1;
    }
}


function karachi() {
    let correct = document.querySelector("#karachi").checked;

    if (correct == true) {
        marks++;
        console.log(correct,marks)
    }
}


function greenandwhite() {
    let correct = document.querySelector("#green").checked;
    if (correct == true) {
        score += 1;
    }
}

function feildhockey() {
    let correct = document.querySelector("#hockey").checked;
    if (correct == true) {
        score += 1;
    }
}




function jasmine() {
    let correct = document.querySelector("#jasmine").checked;
    if (correct == true) {
        score += 1;
    }
}



function checkCity() {
    if (score == 5) {
        alert("congratulations!! You did very well. Your score is"  + score +  "out of 5");
    } else if (score < 5){
        alert("your Score is"  + score +   "out of 5");
    } else{
        alert("some thing went wrong!");
    }
}

