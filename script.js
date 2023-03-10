




const passwordEl = document.getElementById('pass-el');
const copyBtn = document.getElementById('copy-btn');
const genBtn = document.getElementById('submit');
const passwordLength = document.getElementById('pass-len');


let passwordArray = []
let i;

const checkUpperCase = () => {
    
   for(i = 65 ; i < 95 ; i++){
      console.log(String.fromCharCode(i));
   }
}

const checkLowerCase = () => {
    for (i = 97; i <= 122; i++) {
        console.log(String.fromCharCode(i));
    }
}

const checkSymbols = () => {
    alert("checked");
    console.log('working');
}

const checkNumbers = () => {
    alert("checked");
    console.log('working');
}


document.getElementById('cbox-2').addEventListener('click', checkLowerCase);
document.getElementById('cbox-3').addEventListener('click', checkNumbers);
document.getElementById('cbox-4').addEventListener('click', checkSymbols);
document.getElementById('cbox-1').addEventListener('click', checkUpperCase);