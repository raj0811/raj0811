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
