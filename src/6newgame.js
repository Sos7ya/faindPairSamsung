var config = {
    type: Phaser.WEBGL,
    width: 1920,
    height: 1080,
    backgroundColor: '#8EDD73',
    parent: 'phaser-example',
    scene:[preloader, mainMenu, findPair, nextLvl, lateGame, pause],
    scale: {
        mode: Phaser.Scale.FIT
    },
    audio: {
        disableWebAudio: true,
        // noAudio: true,
    }
}

var sessionID;
var gameId = generateUUID();

sessionID = generateUUID();
try{
    var startGameSession = {
      action: 'startGameSession',
      allGameSessionId: sessionID,
      timeStamp: Date.now()
    }
    window?.parent.postMessage(startGameSession, '*');
  }
  
  catch(er){
    var startGameSessionError = {
      action: 'startGameSessionError',
      allGameSessionId: sessionID,
      timeStamp: Date.now()
    }
    window?.parent.postMessage(startGameSessionError, '*');
  }


var game = new Phaser.Game(config);

var gameState={
    onGame: false,
    onMenu: false,
    onPause: false,
    isOver: false,
    onLate: false,
    stage: 0
}

var game_version = 'v 0.2.8s';
var numAnimals = 2;
var maxImageWidth = 300;
var maxImageHeight = 300;
var offsetX = 10;
var gameHeight = maxImageHeight * 3;
var ROWS = 2; //numAnimals <= 7 ? 2 : 3;
var skinIndex = 0;
var boardRows;
var boardCols;
var boardOffSet = 0
var score = 0;
var highScore;