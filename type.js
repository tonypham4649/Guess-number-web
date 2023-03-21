var randomNum = Math.floor(Math.random() * 100) + 1;
var counter = 3;
var score = 0;
// var guessButEle: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-guess')
// var resetButEle: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-reset')
function reset() {
    // window.location.reload()
    randomNum = Math.floor(Math.random() * 100) + 1;
    counter = 3;
    score = 0;
    var guessNumEle = document.getElementById('number');
    guessNumEle.value = '';
    var counterEle = document.getElementById('count');
    counterEle.innerHTML = counter.toString();
    var rEle = document.getElementById('result');
    rEle.innerHTML = '';
}
function check() {
    var counterEle = document.getElementById('count');
    var guessNumEle = document.getElementById('number');
    var guessNum = parseInt(guessNumEle.value);
    var rEle = document.getElementById('result');
    var result = '';
    if (counter == 0) {
        rEle.innerHTML = 'Trò chơi đã kết thúc!<br><br>Xin hãy nhấn nút chơi lại để tiếp tục!';
    }
    else {
        if (guessNum == randomNum) {
            if (counter == 3) {
                score = 100;
            }
            else if (counter == 2) {
                score = 50;
            }
            else {
                score = 30;
            }
            result = 'Chúc mừng bạn đã chiến thắng! Số điểm của bạn là: ' + score;
        }
        else if (counter > 1) {
            if (guessNum < randomNum) {
                result = 'Số của bạn nhỏ quá!';
            }
            else {
                result = 'Số của bạn lớn quá!';
            }
        }
        else if (counter == 1) {
            result = 'GAME OVER<br><br>Đáp án là: ' + randomNum;
        }
        counter -= 1;
        rEle.innerHTML = result;
        counterEle.innerHTML = counter.toString();
    }
}
