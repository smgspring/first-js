// 1. 숫자적음  2. 정답숫자 적음  3. play누름 4.자동숫자생성 5. 일치하면 멘트띄움
// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다. oo
const generateNumberBox = document.querySelector("#generater");
const guessNumberBox = document.querySelector("#guesser");
const playButton = document.querySelector("#play-button");

const myChose = document.querySelector(".mychose");
const machineChose = document.querySelector(".machinechose");
const result = document.querySelector("h4");

function randomGame(e) {
  e.preventDefault();
  const generateNumber = parseInt(generateNumberBox.value);
  const guessNumber = parseInt(guessNumberBox.value);
  if (isNaN(generateNumber) || isNaN(guessNumber)) {
    alert("you have to input number!");
  } else if (generateNumber < 0) {
    alert("you can't set minus range.");
  } else if (guessNumber < 0 || guessNumber > generateNumber) {
    alert(`you have to guess number between 0 to ${generateNumber}`);
  } else {
    const answerNumber = Math.floor(Math.random() * (generateNumber + 1));
    function textInsert(wl) {
      myChose.innerText = `You chose: ${guessNumber},`;
      machineChose.innerText = `the machine chose: ${answerNumber}.`;
      result.innerText = `You ${wl}!`;
    }
    if (guessNumber === answerNumber) {
      textInsert("won");
    } else {
      textInsert("lost");
    }
  }
}
playButton.addEventListener("click", randomGame);
