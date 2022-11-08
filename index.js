function passwordGenerator(input, characters, capitalLetters, lowercase,  nums, symbol){
    const alpha = Array.from(Array(94)).map((e, i)=> i+33);
    //this will get all the character code 
    const newArr = alpha.map((e)=> String.fromCharCode(e));
    //this will generate all the character including number and punctuation mark
    const password = [];
    const re = /[A-Z]/g
    // regular expression to used to filter out the character 
    const num= /[0-9]/g
    // regular expression to used to filter out the character 
    const lower = /[a-z]/g
    // regular expression to used to filter out the character 
    const punctuation = /[.*+?^${}()|[\]\\]/g
    // regular expression to used to filter out the character 
for(let i = 0; i < input; i++){
    // as range will be our length so input used as a parameter
    if(characters){
/* all the characters including numbers and punctuation marks. 
   we do not need to filter out. So, randomise the index of array and push 
   to password array to make random password. instead of newArr[i] here 
   i will be randomised */ 

        password.push(newArr[Math.ceil(Math.random()* newArr.length)])
    }

    if(capitalLetters){
        const newLetter = newArr.join("").match(re)
        // reg expression used to filter out selected charcters
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length)])
    }
    if(lowercase){
        const newLetter = newArr.join("").match(lower)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length)])
    }

    if(nums){
        const newLetter = newArr.join("").match(num)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length)])
    }

    if(symbol){
        const newLetter = newArr.join("").match(punctuation)
        password.push(newLetter[Math.ceil(Math.random()* newLetter.length - 1)])
    }

}

   if(password.length > input){
/*password need to check with range selected if password is more then range 
need to slice the password according to input range. When user selected more 
then one boxes password will be multiply by selection */
    return password.slice(0, input).join("")
   }else{
    return password.join("")
   }
}

const btn = document.querySelector(".password");
//this button will be generate password, so we gonna listen this button

function inputV(){
    const inputValue = document.querySelector(".inputNum").value;
    //this is the function for the input range
    document.querySelector(".inputV").innerHTML = `Password Length: ${inputValue}`
}


function generatePassword(){
    /*as our function has 6 parameters we need to create all this parameters
    to call the function*/
    const characters = document.querySelector(".letters").checked
    //here input checked box has been used so we need checked value 
    const upper = document.querySelector(".cap").checked;
     //here input checked box has been used so we need checked value 
    const lower = document.querySelector(".lowercase").checked;
     //here input checked box has been used so we need checked value 
    const num = document.querySelector(".nums").checked;
     //here input checked box has been used so we need checked value 
    const symbol = document.querySelector(".symbol").checked;
     //here input checked box has been used so we need checked value 
    const inputValue = document.querySelector(".inputNum").value;
     //here range input has been used so we need range value 

    const password = passwordGenerator(inputValue, characters, upper, lower, num, symbol);
    //used variable to call the function and pass all the parameters
    console.log(password)
    document.querySelector(".result").value = `${password}`
    //as I am using DOM to display the result return key not required
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
    //this function refresh the window
    location.reload()
  }


btn.addEventListener("click",  generatePassword)
//submit button will call generate function
