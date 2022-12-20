const words = document.querySelector(".card p");
const input = document.querySelector(".card input");
const card = document.querySelector(".wrapper .card");
const cpmSpan = document.querySelector(".card .content p:nth-child(1) span");
const wpmSpan = document.querySelector(".card .content p:nth-child(2) span");
const mistakeSpan = document.querySelector(".card .content p:nth-child(3) span");
const timeSpan = document.querySelector(".content p:nth-child(4) b");
const restartBtn = document.querySelector(".content img");
let timer, maxTime = 60, timeLeft = maxTime, charIndex = isTyping = mistakes = 0;

// focus on input
card.addEventListener("click", () => input.focus());

// generate paragraph
const generateParagraph = () => {
			let randomIndex = Math.floor(Math.random() * paragraphs.length);
			words.innerText = "";
			paragraphs[randomIndex].split("").forEach((span) => {
						let spanTag = `<span>${span}</span>`;
						words.innerHTML += spanTag;
			})			
} 
document.querySelectorAll(".card p span")[0].classList.add("active");
// on typing function 
const typing = () => {
			let characters = words.querySelectorAll("span");
			let typedChar = input.value.split("")[charIndex];
			if (charIndex < characters.length - 1 && timeLeft > 0) {
						if (!isTyping) {
				timer = setInterval(iniTimer, 1000);
				isTyping = true;
			}
			
			if (typedChar == null) {
				charIndex--;
				if (characters[charIndex].classList.contains("incorrect")) {
							mistakes--;
				}
				
					characters[charIndex].classList.remove("correct", "incorrect");	
			} else {
					if (characters[charIndex].innerText == typedChar) {
						characters[charIndex].classList.add("correct");
			} else {
						characters[charIndex].classList.add("incorrect");
	mistakes++;
			}
			charIndex++;	
			}
			characters.forEach(span => span.classList.remove("active"));	characters[charIndex].classList.add("active");
		mistakeSpan.innerText = mistakes;	
		showResults();
			} else {
						clearInterval(timer);
		}
}
// timing function 
const iniTimer = () => {
			if (timeLeft > 0) {
						timeLeft--;
						timeSpan.innerText = timeLeft;
			} else {
			       input.value = "";
						clearInterval(timer);
			}
}
// showing cpm and wpm
function showResults() {
		let cpm = words.querySelectorAll("span.correct").length;
		let wpm = (cpm / 5);
		
		cpmSpan.innerText = cpm;
		wpmSpan.innerText = wpm;		
}	

// restart the game

const restartGame = () => {
			generateParagraph();
			input.value = "";
			clearInterval(timer);
			cpmSpan.innerText = 0;
		  wpmSpan.innerText = 0;
		  timer, maxTime = 60, timeLeft = 
		  maxTime, charIndex = isTyping = mistakes = 0;
		  mistakeSpan.innerText = 0;
		  timeSpan.innerText = 0;

}

// scroll animation function 
const scrollAnimation = () => {
		let items = document.querySelectorAll(".section .row section");
		let triggerBottom = (window.innerHeight / 5) * 4;
		items.forEach((item) => {
				let boxTop = item.getBoundingClientRect().top;
				if (boxTop < triggerBottom) {
						item.classList.add("show");
				} else {
							item.classList.remove("show");
				}
		})
} 


generateParagraph();
input.addEventListener("input", typing);
restartBtn.addEventListener("click", restartGame);
window.addEventListener("scroll", scrollAnimation);

