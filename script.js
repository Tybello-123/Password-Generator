
const resultEl = document.getElementById('result-el');
const copyBtn = document.getElementById('copy-btn');
const generateEl = document.getElementById('submit');
const passwordLength = document.getElementById('pass-len');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');



//copy password to clipboard
copyBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password){
   return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied successfully')

} )

// add an event listener to the generator button
generateEl.addEventListener( 'click', () => {
    const length = +passwordLength.value;
    const hasUpper = upperCaseEl.checked;
    const hasLower = lowerCaseEl.checked;
  
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(
       
        hasUpper,
        hasLower,
        hasNumbers,
        hasSymbols,
        length
        );
})



// generate password function

function generatePassword(upper, lower, number, symbol, length){
 // 1. Init pw var
 //2. Filter out unchecked types
 // 3. loop over length call generator function for each type
 // 4. add final pw to the pw var return

  let generatedPassword = '';

  const typesCount = upper + lower + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(

    item => Object.values(item)[0]
  );

   // console.log('typesArr: ', typesArr);

  if(typesCount === 0){
    return ''
  }

  for(let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      // console.log('funcName:' , funcName);

      generatedPassword += randonFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
 

  
}


//Generator functions for lower case letters , upper case letters,number liter and symbols

const genUpperCase = () => {
    
    return String.fromCharCode(Math.floor(Math.random() * 26 + 96))
   
}

const genLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random()*26 + 65))
}

const genSymbols = () => {
    const symbols = '!@#$%^&*()*,-./[]{}+,?<>';
    return symbols[Math.floor(Math.random() * symbols.length)];

}

const genNumbers = () => {
   return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}


//store the generator functions in the objects

const randonFunc = {
    upper : genUpperCase,
    lower : genLowerCase,
    number : genNumbers,
    symbol : genSymbols
};