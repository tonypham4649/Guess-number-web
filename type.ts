var randomNum: number = Math.floor(Math.random() * 100) + 1
var counter: number = 3
var score: number = 0

// var guessButEle: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-guess')
// var resetButEle: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-reset')

function reset() {
    // window.location.reload()
    randomNum = Math.floor(Math.random() * 100) + 1
    counter = 3
    score = 0
    let guessNumEle: HTMLInputElement = <HTMLInputElement>document.getElementById('number')
    guessNumEle.value = ''
    
    let counterEle: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('count')
    counterEle.innerHTML = counter.toString()

    let rEle: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('result')
    rEle.innerHTML = ''
}

function check():void {  
    var counterEle: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('count')
    
    var guessNumEle: HTMLInputElement = <HTMLInputElement>document.getElementById('number')
    var guessNum: number = parseInt(guessNumEle.value)
    
    var rEle: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('result')
    var result:string = ''
    if (counter == 0) {
        rEle.innerHTML = 'Trò chơi đã kết thúc!<br><br>Xin hãy nhấn nút chơi lại để tiếp tục!'
    
    } else {
        if (guessNum == randomNum) {
            if (counter == 3) {
                score = 100
            } else if (counter == 2) {
                score = 50
            } else {
                score = 30
            }
            result = 'Chúc mừng bạn đã chiến thắng! Số điểm của bạn là: ' + score
            
        } else if (counter > 1) {
            if (guessNum < randomNum) {
                result = 'Số của bạn nhỏ quá!'
            } else {
                result = 'Số của bạn lớn quá!'
            }
            
        } else if (counter == 1){
            result = 'GAME OVER<br><br>Đáp án là: ' + randomNum
        }
        
        counter -= 1
        rEle.innerHTML = result
        counterEle.innerHTML = counter.toString()
    }
}
    