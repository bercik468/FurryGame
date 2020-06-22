class Furry {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
  }
}
class Coin {
  constructor() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  }
}
class Result {
  constructor() {
    this.score = 0;
    this.level = 1;
  }
}
class Game {
  constructor() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.result = new Result();
    this.index = function (x, y) {
      return x + y * 10;
    };
  }
  showFurry() {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  }
  showCoin() {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  }
  startGame() {
    this.showFurry();
    this.showCoin();
    document.querySelector("#score").style.display = "block";
    document.querySelector("#board").style.display = "block";
    document.querySelector("#start").style.display = "none";
    this.idSetInterval = setInterval(() => {
      this.moveFurry();
    }, 250);
  }
  levels() {
    const squares = document.querySelectorAll("#board div");
    if (this.result.score === 10) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 180);
      this.result.level++;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      squares.forEach((square) => {
        square.style.boxShadow = "0px 0px 5px 1px rgb(0, 4, 250)";
      });
    }
    if (this.result.score === 20) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 130);
      this.result.level++;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      squares.forEach((square) => {
        square.style.boxShadow = "0px 0px 5px 1px rgb(0, 204, 255)";
      });
    }
    if (this.result.score === 30) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 110);
      this.result.level++;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      squares.forEach((square) => {
        square.style.boxShadow = "0px 0px 5px 1px rgb(255, 5, 5)";
      });
    }
    if (this.result.score === 40) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 100);
      this.result.level++;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      squares.forEach((square) => {
        square.style.boxShadow = "0px 0px 5px 1px rgb(13, 255, 5)";
      });
    }
    if (this.result.score === 50) {
      clearInterval(this.idSetInterval);
      this.idSetInterval = setInterval(() => {
        this.moveFurry();
      }, 80);
      this.result.level++;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      squares.forEach((square) => {
        square.style.boxShadow = "0px 0px 5px 1px rgb(247, 5, 255)";
      });
    }
  }
  moveFurry() {
    if (this.furry.direction === "right") {
      this.furry.x++;
    } else if (this.furry.direction === "left") {
      this.furry.x--;
    } else if (this.furry.direction === "up") {
      this.furry.y--;
    } else if (this.furry.direction === "down") {
      this.furry.y++;
    }

    this.gameOver();
    this.hideVisibleFurry();
    this.checkCoinCollision();
    this.showFurry();
  }
  hideVisibleFurry() {
    if (
      this.furry.x < 0 ||
      this.furry.x > 9 ||
      this.furry.y < 0 ||
      this.furry.y > 9
    ) {
      this.furry = new Furry();
    } else {
      document.querySelector(".furry").classList.remove("furry");
    }
  }
  turnFurry(e) {
    switch (e.which) {
      case 37:
        this.furry.direction = "left";
        const left = new Audio();
        left.src = "./audio/left.mp3";
        left.play();
        break;
      case 39:
        this.furry.direction = "right";
        const right = new Audio();
        right.src = "./audio/right.mp3";
        right.play();
        break;
      case 38:
        this.furry.direction = "up";
        const up = new Audio();
        up.src = "./audio/up.mp3";
        up.play();
        break;
      case 40:
        this.furry.direction = "down";
        const down = new Audio();
        down.src = "./audio/down.mp3";
        down.play();
        break;
    }
  }
  checkCoinCollision() {
    if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
      document.querySelector(".coin").classList.remove("coin");
      this.result.score++;
      document.querySelector("#score .score").innerText = this.result.score;
      document.querySelector("#over .score").innerText = this.result.score;
      document.querySelector("#score .level").innerText = this.result.level;
      document.querySelector("#over .level").innerText = this.result.level;
      this.coin = new Coin();
      this.showCoin();
      this.levels();
      const eat = new Audio();
      eat.src = "./audio/eat.mp3";
      eat.play();
    }
  }
  gameOver() {
    if (
      this.furry.x < 0 ||
      this.furry.x > 9 ||
      this.furry.y < 0 ||
      this.furry.y > 9
    ) {
      clearInterval(this.idSetInterval);
      this.hideVisibleFurry();
      document.querySelector("#board").style.display = "none";
      document.querySelector("#score").style.display = "none";
      document.querySelector("#over").style.display = "flex";
      const dead = new Audio();
      dead.src = "./audio/dead.mp3";
      dead.play();
    }
  }
  gameReload() {
    const squares = document.querySelectorAll("#board div");
    squares.forEach((square) => {
      square.style.boxShadow = "1px 1px 5px 1px rgb(255, 188, 5)";
    });
    document.querySelector("#board").style.display = "block";
    document.querySelector("#score").style.display = "flex";
    document.querySelector("#over").style.display = "none";
    this.result = new Result();
    this.furry = new Furry();
    document.querySelector("#score .score").innerText = this.result.score;
    document.querySelector("#over .score").innerText = this.result.score;
    document.querySelector("#score .level").innerText = this.result.level;
    document.querySelector("#over .level").innerText = this.result.level;
    this.startGame();
  }
}

const game = new Game();

const btnStart = document.querySelector(".start");
btnStart.addEventListener("click", function () {
  game.startGame();
});

document.addEventListener("keydown", function (e) {
  game.turnFurry(e);
});

const btnEnd = document.querySelector(".end");
btnEnd.addEventListener("click", function () {
  game.gameReload();
});
