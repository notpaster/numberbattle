function play() {
	var number = getRandom(1,9)
	var val = document.getElementById('userinput').value;
	const heading = document.getElementById('result');

	document.getElementById('victim-num').textContent = number
	if (number == val) {
		document.getElementById('result').textContent = "Вы выйграли!"
		heading.style.color = 'green';
	} else {
		document.getElementById('result').textContent = "Вы проиграли.."
		heading.style.color = 'red';
	}
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 