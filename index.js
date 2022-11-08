function passwordGenerator(input, characters, capitalLetters, lowercase,  nums, symbol){
    const alpha = Array.from(Array(94)).map((e, i)=> i+33);
    const newArr = alpha.map((e)=> String.fromCharCode(e));
    const password = [];
    const re = /[A-Z]/g
    const num= /[0-9]/g
    const lower = /[a-z]/g
    const punctuation = /[.*+?^${}()|[\]\\]/g
for(let i = 0; i < input; i++){
    if(characters){
        password.push(newArr[Math.ceil(Math.random()* newArr.length - 1)])
    }

    if(capitalLetters){
        const newLetter = newArr.join("").match(re)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length - 1)])
    }
    if(lowercase){
        const newLetter = newArr.join("").match(lower)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length - 1)])
    }

    if(nums){
        const newLetter = newArr.join("").match(num)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length - 1)])
    }

    if(symbol){
        const newLetter = newArr.join("").match(punctuation)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length - 1)])
    }

}

   if(password.length > input){
    return password.slice(0, input).join("")
   }else{
    return password.join("")
   }
}
// const upper = false;
// const num = false;
// const lower = true;
// const letters = false;
// const punck = true;
// console.log(passwordGenerator(12, letters, upper, lower, punck, num))
const btn = document.querySelector(".password")

function inputV(){
    const inputValue = document.querySelector(".inputNum").value;
    document.querySelector(".inputV").innerHTML = `Password Length: ${inputValue}`
}


function generate(){
    const characters = document.querySelector(".letters").checked
    const upper = document.querySelector(".cap").checked;
    const lower = document.querySelector(".lowercase").checked;
    const num = document.querySelector(".nums").checked;
    const symbol = document.querySelector(".symbol").checked;
    const inputValue = document.querySelector(".inputNum").value;

    const password = passwordGenerator(inputValue, characters, upper, lower, num, symbol);
    console.log(password)
    document.querySelector(".result").value = `${password}`
}

function copy() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  function reset(){
    location.reload()
  }


btn.addEventListener("click",  generate)
