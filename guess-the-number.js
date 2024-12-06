let btnOK = document.getElementById("btnConfirm");
let btnReset = document.getElementById("resetGame");
let machineNumber;
let userNumber;
let diff;
let countTrial = 0;
let maxTrial = 10;
let result = document.getElementById("result");

btnOK.addEventListener('click', () => {
    diff = document.getElementById('difficulty').value;
    userNumber = parseInt(document.getElementById('userNum').value);

    if (countTrial == 0 && isNaN(machineNumber)) {
        if (diff == 'easy') {
            machineNumber = Math.floor(Math.random() * 10) + 1;
            maxTrial = 3;
        } else if (diff == 'medium') {
            machineNumber = Math.floor(Math.random() * 50) + 1;
            maxTrial = 5;
        } else if (diff == 'hard') {
            machineNumber = Math.floor(Math.random() * 100) + 1;
        }
        //console.log(machineNumber);
    }


    if (userNumber > machineNumber) {
        result.innerText = (`${userNumber} is too high!`);
        countTrial++;
    } else if (userNumber < machineNumber) {
        result.innerHTML = (`${userNumber} is too low!`)
        countTrial++;
    } else if (userNumber === machineNumber) {
        result.innerText = (`Bravo! ${userNumber} is correct!`)
        btnOK.style.visibility = "hidden";
        btnReset.style.visibility = "visible";;
    } else {
        result.innerText = ('Unexpected case')
    }

    if (countTrial == maxTrial) {
        result.innerText = result.innerText + '\n' + 'Играта приключи!'
        if (userNumber != machineNumber) {
            result.innerText = result.innerText + '\n' + `Имаше право на ${maxTrial} опита!`
                + '\n' + `Числото беше ${machineNumber}!`
        }

        btnOK.style.visibility = "hidden";
        btnReset.style.visibility = "visible";
    }
});

btnReset.addEventListener('click', () => {
    result.innerText = "";
    document.getElementById('userNum').value = "";
    btnOK.style.visibility = "visible";
    btnReset.style.visibility = "hidden";
    countTrial = 0;
});