const paragraph = document.getElementById("para");
var mistakeTag = document.getElementById("mistakes");
const timeTag = document.getElementById("timeLeft");
const cont = document.querySelector(".container");
var tryAgainBtn = document.getElementById("resetBtn");
let timer, maxTime = 60, timeLeft = maxTime, charIndex = isTyping = mistakes = 0;
const input = document.getElementById("input");
function randomParagraph(){
let randIndex = Math.floor(Math.random() * paragraphsArr.length);
paragraph.innerHTML = "";
			paragraphsArr[randIndex].split("").forEach(span => {
						let spanTag = `<span>${span}</span>`;
						paragraph.innerHTML += spanTag;
			})};
cont.onclick = () => {
			input.focus();
}
function typing(){
			const characters = paragraph.querySelectorAll("span");
			let typedChar = input.value.split("")[charIndex];
			if(!isTyping){ 
			timer = setInterval(initTimer, 1000);
			isTyping = true;
}
		  	if (typedChar == null) {
						charIndex--;
				if (characters[charIndex].classList.contains("incorrect")) {
							mistakes--;
				}
				characters[charIndex].classList.remove("correct", "incorrect");
			}else {
						
			if (characters[charIndex].innerText === typedChar) {
				characters[charIndex].classList.add("correct");
			}else { 
			mistakes++;	characters[charIndex].classList.add("incorrect");
			}
			charIndex++;
		}
		characters.forEach(span => span.classList.remove("active"));	characters[charIndex].classList.add("active");
		mistakeTag.innerText = mistakes;		
}		

function initTimer() {
			if (timeLeft > 0) {
					timeLeft--;
					timeTag.innerText = timeLeft;	
			}else{
			clearInterval(timer);		
			}
}
function resetGame(){
			randomParagraph();
			clearInterval(timer);
			input.value = "";
			charIndex = 0;
			timeLeft = maxTime, charIndex = mistakes = isTyping = 0;
			timeTag.innerText = timeLeft;
			mistakeTag.innerText = mistakes;
}
randomParagraph();
input.addEventListener("input", typing)
tryAgainBtn.addEventListener("click", resetGame)			
