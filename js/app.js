///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const markedIndexX = [];
const markedIndexO = [];

///////////////////// APP STATE (VARIABLES) /////////////////////////
let turn;
let board;

let win;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////



function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";
  win = null;
  render();
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}
function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      if (turn == "X") {
        markedIndexX[markedIndexX.length] = index
      }
      board[index] = "X";
///////////////////// StartGame /////////////////////////////////////
if (markedIndexX.length == 1) {
  if (markedIndexX == 0 || markedIndexX == 2 || markedIndexX == 6 || markedIndexX == 8) {
    board[4] = "O"
    markedIndexO[markedIndexO.length] = 4
  } else if (markedIndexX == 3) {
    board[5] = "O"
    markedIndexO[markedIndexO.length] = 5
  } else if (markedIndexX == 5) {
    board[3] = "O"
    markedIndexO[markedIndexO.length] = 3
  } else if (markedIndexX == 1) {
    board[7] = "O"
    markedIndexO[markedIndexO.length] = 7
  } else if (markedIndexX == 7) {
    board[1] = "O"
    markedIndexO[markedIndexO.length] = 1
  } else if (markedIndexX == 4) {
    board[0] = "O"
    markedIndexO[markedIndexO.length] = 0
  }
} else {
  ///////////////////// WinCheck /////////////////////////////////////
  if (board[0] == "O" && board[0] == board[1] && board[2] != "X") {
    board[2] == "O"
  } else if (board[0] == "O" && board[0] == board[2] && board[1] != "X") {
    board[1] == "O"
  } else if (board[1] == "O" && board[1] == board[2] && board[0] != "X") {
    board[0] == "O"
  }else if (board[3] == "O" && board[3] == board[4] && board[5] != "X") {
    board[5] == "O"
  }else if (board[3] == "O" && board[3] == board[5] && board[4] != "X") {
    board[4] == "O"
  }else if (board[4] == "O" && board[4] == board[5] && board[3] != "X") {
    board[3] == "O"
  }else if (board[6] == "O" && board[6] == board[7] && board[8] != "X") {
    board[8] == "O"
  }else if (board[6] == "O" && board[6] == board[8] && board[7] != "X") {
    board[7] == "O"
  }else if (board[7] == "O" && board[7] == board[8] && board[6] != "X") {
    board[6] == "O"
  }else if (board[0] == "O" && board[3] == board[0] && board[6] != "X") {
    board[6] = "O"
  }else if (board[0] == "O" && board[6] == board[0] && board[3] != "X") {
    board[3] = "O"
  }else if (board[6] == "O" && board[3] == board[6] && board[0] != "X") {
    board[0] = "O"
  }else if (board[1] == "O" && board[4] == board[1] && board[7] != "X") {
    board[7] = "O"
  }else if (board[1] == "O" && board[7] == board[1] && board[4] != "X") {
    board[4] = "O"
  }else if (board[4] == "O" && board[7] == board[4] && board[1] != "X") {
    board[2] = "O"
  }else if (board[2] == "O" && board[2] == board[5] && board[8] != "X") {
    board[8] = "O"
  }else if (board[2] == "O" && board[2] == board[8] && board[5] != "X") {
    board[5] = "O"
  }else if (board[5] == "O" && board[5] == board[8] && board[2] != "X") {
    board[2] = "O"
  }else if (board[0] == "O" && board[0] == board[4] && board[8] != "X") {
    board[8] = "O"
  }else if (board[0] == "O" && board[0] == board[8] && board[4] != "X") {
    board[4] = "O"
  }else if (board[4] == "O" && board[4] == board[8] && board[0] != "X") {
    board[0] = "O"
  }else if (board[2] == "O" && board[2] == board[4] && board[6] != "X") {
    board[6] = "O"
  }else if (board[2] == "O" && board[2] == board[6] && board[4] != "X") {
    board[4] = "O"
  }else if (board[6] == "O" && board[6] == board[4] && board[2] != "X") {
    board[2] = "O"
    ///////////////////// BlockCheck /////////////////////////////////////
  } else if (board[0] == "X" && board[0] == board[1] && board[2] != "O") {
    board[2] == "O"
  } else if (board[0] == "X" && board[0] == board[2] && board[1] != "O") {
    board[1] == "O"
  } else if (board[1] == "X" && board[1] == board[2] && board[0] != "O") {
    board[0] == "O"
  }else if (board[3] == "X" && board[3] == board[4] && board[5] != "O") {
    board[5] == "O"
  }else if (board[3] == "X" && board[3] == board[5] && board[4] != "O") {
    board[4] == "O"
  }else if (board[4] == "X" && board[4] == board[5] && board[3] != "O") {
    board[3] == "O"
  }else if (board[6] == "X" && board[6] == board[7] && board[8] != "O") {
    board[8] == "O"
  }else if (board[6] == "X" && board[6] == board[8] && board[7] != "O") {
    board[7] == "O"
  }else if (board[7] == "X" && board[7] == board[8] && board[6] != "O") {
    board[6] == "O"
  }else if (board[0] == "X" && board[3] == board[0] && board[6] != "O") {
    board[6] = "O"
  }else if (board[0] == "X" && board[6] == board[0] && board[3] != "O") {
    board[3] = "O"
  }else if (board[6] == "X" && board[3] == board[6] && board[0] != "O") {
    board[0] = "O"
  }else if (board[1] == "X" && board[4] == board[1] && board[7] != "O") {
    board[7] = "O"
  }else if (board[1] == "X" && board[7] == board[1] && board[4] != "O") {
    board[4] = "O"
  }else if (board[4] == "X" && board[7] == board[4] && board[1] != "O") {
    board[2] = "O"
  }else if (board[2] == "X" && board[2] == board[5] && board[8] != "O") {
    board[8] = "O"
  }else if (board[2] == "X" && board[2] == board[8] && board[5] != "O") {
    board[5] = "O"
  }else if (board[5] == "X" && board[5] == board[8] && board[2] != "O") {
    board[2] = "O"
  }else if (board[0] == "X" && board[0] == board[4] && board[8] != "O") {
    board[8] = "O"
  }else if (board[0] == "X" && board[0] == board[8] && board[4] != "O") {
    board[4] = "O"
  }else if (board[4] == "X" && board[4] == board[8] && board[0] != "O") {
    board[0] = "O"
  }else if (board[2] == "X" && board[2] == board[4] && board[6] != "O") {
    board[6] = "O"
  }else if (board[2] == "X" && board[2] == board[6] && board[4] != "O") {
    board[4] = "O"
  }else if (board[6] == "X" && board[6] == board[4] && board[2] != "O") {
    board[2] = "O"
    ///////////////////// ELSE /////////////////////////////////////
  } else {
    while (markedIndexO.includes(randomRemainingNumber) || markedIndexX.includes(randomRemainingNumber)) {
      var randomRemainingNumber = Math.floor(Math.random()*10);
    }
    board[randomRemainingNumber] = "O";
  }
}
      win = getWinner();
      render();
    }
  }
}
function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;    // writes an X or an O on board
  });
  message.textContent = `Turn: X`;
}
