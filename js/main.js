'use strict';

var gBoard;
var gNums = [];
var gCounter = 1;
var gTimer;
var gSeconds = 0.01;

function init(size) {
	createNumsPool(size);
	gBoard = createBoard(size);
	renderBoard(gBoard);
}

function createBoard(size) {
	var board = [];
	for (var i = 0; i < Math.sqrt(size); i++) {
		board.push([]);
		for (var j = 0; j < Math.sqrt(size); j++) {
			board[i][j] = getRandomNumber(size);
		}
	}
	return board;
}
function createNumsPool(size) {
	for (var i = 1; i <= size; i++) {
		gNums.push(i);
	}
}

function getRandomNumber(size) {
	var idx = getRandomIntInclusive(0, gNums.length - 1);
	var num = gNums.splice(idx, 1);

	return num;
}

function renderBoard(board) {
	var strHtml = '';
	for (var i = 0; i < board.length; i++) {
		strHtml += '<tr>';
		for (var j = 0; j < board[0].length; j++) {
			var cell = board[i][j];
			strHtml += `<td class="tdNumbers" onclick="cellClicked(this)">${cell}</td>`;
		}
		strHtml += '</tr>';
	}
	var elBoard = document.querySelector('.board');
	elBoard.innerHTML = strHtml;
}

function cellClicked(elCell) {
	if (gCounter === +elCell.innerText) {
		elCell.style.background='-webkit-linear-gradient(to left, #fc4a1a, #f7b733)'; 
		elCell.style.background= 'linear-gradient(to left, #fc4a1a, #f7b733)';
			
		if (gCounter === 1) gTimer = setInterval(countUpTimer, 10);
		if (gCounter === 16) {
			clearInterval(gTimer);
			document.querySelector('.modal').classList.remove('hidden');
			document.querySelector('.overlay').classList.remove('hidden');
		}

		gCounter++;
	}
}

function countUpTimer() {
	var elTimer = document.querySelector('.timer');
	elTimer.innerText = `Let's see how fast you can go: ${gSeconds.toFixed(
		3
	)} seconds`;
	gSeconds += 0.01;
}
function resetGame() {
	gCounter = 1;
	var elBtnNumbers = document.querySelectorAll('.tdNumbers');
	for (var i = 0; i < elBtnNumbers.length; i++) {
		elBtnNumbers[i].style.backgroundColor = 'rgb(20, 59, 233)';
		clearInterval(gTimer);
		gSeconds = 0;
		document.querySelector(
			'.timer'
		).innerText = `Let's see how fast you can go:`;
		document.querySelector('.modal').classList.add('hidden');
		document.querySelector('.overlay').classList.add('hidden');
	}
}
