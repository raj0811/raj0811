<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>Document</title>
</head>
<body>
    
    <h1>HI there</h1>
    <div class="typing-effect">
        <span id="text"></span>
        <span class="cursor"></span>
      </div>

      <ul>
        <li>I am Currently Learning ReactJs </li>
        <li>Portfolio <a href="http://bit.ly/3zbn6ef">Click here</a></li>
        <li>How to Reach me: rpbarmaiya@gmail.com</li>
      </ul>

      <h1>My Skills</h1>

      <div class="skills">
        <div class="skill frontend"></div>
        <div class="skill frontend"></div>
      </div>
      
      <script>

const texts = ["I am Raj Barmaiya", "Thank you for visiting My Profile "]; // Add more texts if needed
let currentTextIndex = 0;
let currentCharIndex = 0;
let direction = 1;

function typeText() {
  const text = texts[currentTextIndex];
  const textSpan = document.getElementById("text");

  if (direction === 1) {
    textSpan.textContent += text[currentCharIndex];
    currentCharIndex++;

    if (currentCharIndex === text.length) {
      direction = -1;
      setTimeout(typeText, 1500); // Delay before backspacing
    } else {
      setTimeout(typeText, 50); // Typing speed
    }
  } else if (direction === -1) {
    textSpan.textContent = text.substr(0, currentCharIndex);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      direction = 1;
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to next text
      setTimeout(() => {
        textSpan.textContent = ""; // Clear previous text
        typeText();
      }, 500); // Delay before typing the next text
    } else {
      setTimeout(typeText, 50); // Backspacing speed
    }
  }
}

typeText(); // Start the animation


      </script>
</body>
</html>

### Hi there 👋

<!--
**raj0811/raj0811** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
