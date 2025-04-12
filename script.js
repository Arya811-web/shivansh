function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Array of text that you want to cycle through
const texts = [
    "Web Developer |",
    "Web Designer |",
    " Coder |",
    // "Hope you're liking this animation!"
  ];
  
  // Get the element that will have its text changed
  const textElement = document.getElementById('text');
  
  // Function to change the text every 4 seconds
  let index = 0;
  function changeText() {
    // Start by fading out the current text
    textElement.style.opacity = 0;
  
    // Wait for the fade-out to complete before changing text
    setTimeout(() => {
      // Change the text after fade-out
      textElement.textContent = texts[index];
      index = (index + 1) % texts.length; // Cycle through the text array
      
      // Fade in the new text
      textElement.style.opacity = 1;
    }, 1000); // Fade-out duration (1 second)
  }
  
  // Change text every 4 seconds
  setInterval(changeText, 4000);
  
  // Initially set the text
  changeText();
 

