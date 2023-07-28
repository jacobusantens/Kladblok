//Initial References
const letterContainer = document.getElementById("letter-container");



//Initial Function (Called when page loads/user presses new game)
const initializer = () => {

    //Initially erase all content and hide letteres and new game button
    letterContainer.classList.add("hide");    
    letterContainer.innerHTML = "";
  
    //For creating letter buttons
    for (let i = 65; i < 91; i++) {
      let button = document.createElement("button");
      button.classList.add("letters");
      button.className = "button_size";
      //Number to ASCII[A-Z]
      button.innerText = String.fromCharCode(i);
      //character button click
      
      button.addEventListener("click", () => {
      document.getElementById('result').value += button.innerText; 
      });
      letterContainer.append(button);
    }


}

function clearScreen() {
  document.getElementById('result').value = "";
}

function insert_space() {
  document.getElementById('result').value += ' '; 
}

//New Game
window.onload = initializer;