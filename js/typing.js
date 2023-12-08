const textToType = "과연 가상코인으로 부자가 될 수 있을까요?";
const typingDelay = 100; // 글자가 타이핑되는 간격(ms)
const pauseDelay = 4000; // 텍스트가 모두 입력된 후 멈추는 시간(ms) - 2초
const typingTextElement = document.getElementById("typing-text");
typingTextElement.style.color="white";
typingTextElement.style.fontSize="2.25rem";

let charIndex = 0;
let isTyping = true;

function typeCharacter() {
    if (isTyping) {
        typingTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;

        if (charIndex < textToType.length) {
            setTimeout(typeCharacter, typingDelay);
        } else {
            isTyping = false;
            setTimeout(eraseCharacter, pauseDelay);
        }
    }
}

function eraseCharacter() {
    if (!isTyping) {
        const currentText = typingTextElement.textContent;

        if (currentText.length > 0) {
            typingTextElement.textContent = currentText.slice(0, -1);
            setTimeout(eraseCharacter, typingDelay);
        } else {
            isTyping = true;
            charIndex = 0;
            setTimeout(typeCharacter, typingDelay);
        }
    }
}

typeCharacter(); // 페이지가 로드될 때 타이핑 효과 시작
