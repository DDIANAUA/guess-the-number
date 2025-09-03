'use strict';

// Додаємо елементи
const inputElement = document.getElementById('input-number');
const thinkButtonElement = document.getElementById('think-button');
const resultElement = document.getElementById('result');
const resetButtonElement = document.getElementById('reset-button');

// Створюємо змінну для випадкового числа
let theNumber;

// Функія яка генерує випадкове число та створює нову гру
function newGame() {
	theNumber = Math.round(Math.random() * 10);
	console.log(theNumber);
	resultElement.textContent = 'hmmmmm.....';
}

// виклик функціх
newGame();

// Обробник події на кнопку
thinkButtonElement.addEventListener('click', checkingTheAnswer);

// Функція перевірки відповіді користувача
function checkingTheAnswer() {
	if (inputElement.value) {
		console.log(Number(inputElement.value));
		if (theNumber == inputElement.value) {
			console.log('URAAAA');
			resultElement.textContent =
				'You won. please enter reset to start a new game';
		} else if (theNumber != inputElement.value) {
			if (theNumber > inputElement.value) {
				console.log('your number is less');
				resultElement.textContent = 'your number is less';
			} else if (theNumber < inputElement.value) {
				resultElement.textContent = 'your number is more';
				console.log('your number is more');
			}
		}
	}
	inputElement.value = '';
}

// Обробник події на кнопку скиду
resetButtonElement.addEventListener('click', newGame);
