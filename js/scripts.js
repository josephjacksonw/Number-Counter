// Business logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

function check(num1, num2) {
  if (num1 < num2) {
    console.log("the check works");
    return "Error: the number counted by cannot be larger than the number counted to";
  } else if (num1 < 0 || num2 < 0) {
    console.log("check2 works!");
    return "Error: Both numbers must be positive";
  }  else {
    return "we good"
  }
}



function counter(num1, num2) {
  console.log(num1, num2);
  let outTitle = "Output:"
  for (let i = num2; i <= num1; i += num2) {
    console.log(i)
    outTitle = outTitle.concat(" " + i)
    if (i + num2 <= num1) {
      outTitle = outTitle.concat(",")
    }
  }
  return outTitle
}



// UI logic
function submitHandler(event) {
  event.preventDefault();
  let result = ""
  const number1 = parseInt(document.querySelector("input[name='number1']").value);
  const number2 = parseInt(document.querySelector("input[name='number2']").value);
  console.log("input1:" + number1 + "input2: " + number2);
  result = check(number1, number2);
  console.log(result)
  if (result.includes("Error")){
    console.log(result)
    //return
  } else {
    result = counter (number1, number2);
  }






  document.getElementById("result").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("counter").addEventListener("submit", submitHandler);
  console.log("page load function worked")
});

