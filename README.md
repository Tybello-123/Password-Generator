# password-generator

const resultEl = document.getElementById('result-el');
const copyBtn = document.getElementById('copy-btn');
const generateEl = document.getElementById('submit');
const passwordLength = document.getElementById('pass-len');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');


const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[]\\;',./";

let genPassword = '';

function password(length){
   for(let i = 0; i < length ; i++){
     
     const randomchar = char[Math.floor(Math.random() * char.length)]

       genPassword += randomChar
   }
 
 return password
}

const newPassword = password(10)

console.log(newPassword)




















 A javascript password generator application

const resultEl = document.getElementById('result-el');
const copyBtn = document.getElementById('copy-btn');
const generateEl = document.getElementById('submit');
const passwordLength = document.getElementById('pass-len');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');


generateEl.addEventListener('click', () =>{
    let passwordLength = +password.value;
    let hasUpperCase = upperCaseEl.checked
    let hasLowerCase = lowerCaseEl.checked
    let hasNumbers = numbers.checked
    let hasSymbols = symbols.checked

    result.innerText = generatePassword(
        passwordLength,
        hasUpperCase,
        hasLowerCase,
        hasNumbers,
        hasSymbols
    )
})

function generatePassword(lower, upper, number , symbol){

 let generatedPassword = '';

 if(resultEl.innerText === ''){
    return 
 }

//count all the types

 const typesCount = upper + lower + number + symbol;

 //filter out uncheked values. from the values of types count fitler the items that are uncecked 
 const typeArr = [{lower}, {upper}, {number},{symbol}].filter(
    item => Object.values(item)[0];
 )

for values of i as long as i is less than length increase i by types count 
 for(let i = 0, i < length , i += typeArr){
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
  })

  generatedPassword += randonFunc[funcName]();
 }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function upperCase () { 
    return Math.floor(Math.random() * 26 + 97)
}

function lowerCase () { 
    return Math.floor(Math.random() * 26 + 65)
}

function numbers () { 
    return Math.floor(Math.random() * 10 + 47)
}

function symbols () { 
    const symbols = "!@#$%^&*()*+{}[]"
   
       return symbols[Math.floor(Math.random() * symbols.length)] 
    
}

let randomFunc = {
    lower: lowerCase,
    upper: upperCase,
    number:  numbers,
    symbol: symbols

}