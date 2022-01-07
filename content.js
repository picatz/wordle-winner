var solution = JSON.parse(localStorage.gameState).solution;

for (var i = 0; i < solution.length; i++) {
	window.dispatchEvent(new KeyboardEvent('keydown', {'key': solution.charAt(i)}));
}

document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(1)").click()