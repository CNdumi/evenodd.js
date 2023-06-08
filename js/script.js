function detectEvenOdd() {
    const numberInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
  
    if (numberInput === "") {
      resultElement.textContent = "Please enter a number.";
      return;
    }
  
    const number = parseInt(numberInput);
  if (number % 2 === 0) {
      resultElement.textContent = number + " is even.";
    } else {
      resultElement.textContent = number + " is odd.";
    }
  }
  
  