const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum , num){
    if(sum % num === 0){
        outputBox.innerText = "Your birthday is lucky 🚀";
    }
    else{
        outputBox.innerText = "Your birthday is not lucky 🤒";
    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const num = luckyNumber.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum , num);
    }
    else{
        outputBox.innerText = "Please enter both the fields 😡";
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-" , "");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener("click" , checkBirthdayIsLucky);

