"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Preloader = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Preloader, _Phaser$Scene);
  var _super = _createSuper(Preloader);
  function Preloader() {
    var _this;
    _classCallCheck(this, Preloader);
    _this = _super.call(this, {
      key: 'Preloader'
    });
    _this.loadText;
    return _this;
  }
  _createClass(Preloader, [{
    key: "preload",
    value: function preload() {
      try {
        var _window;
        var startDownloading = {
          action: 'startDownloading',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window = window) === null || _window === void 0 || _window.parent.postMessage(startDownloading, parentOrigin);
        this.loadText = this.add.text(game.config.width / 2, game.config.height / 2, 'ЗАГРУЗКА...', {
          fontFamily: 'RubikOne-Regular',
          fontSize: 64,
          color: '#e3f2ed'
        });
        this.loadText1 = this.add.text(game.config.width / 2, game.config.height / 2, 'Loading ...', {
          fontFamily: 'Rubik-Regular',
          fontSize: 64,
          color: '#e3f2ed'
        }).alpha = 0;
        this.loadText2 = this.add.text(game.config.width / 2, game.config.height / 2, 'Loading ...', {
          fontFamily: 'Rubik-Medium',
          fontSize: 64,
          color: '#e3f2ed'
        }).alpha = 0;
        this.loadText3 = this.add.text(game.config.width / 2, game.config.height / 2, 'Loading ...', {
          fontFamily: 'Rubik-SemiBold',
          fontSize: 64,
          color: '#e3f2ed'
        }).alpha = 0;
        this.loadText.setOrigin(0.5);
        this.load.setPath('assets/');
        this.load.image('cardBack_0', 'images/skins/cardBack_0.png');
        this.load.image('cardBack_1', 'images/skins/cardBack_1.png');
        this.load.image('cardBack_2', 'images/skins/cardBack_2.png');
        this.load.image('cardBack_3', 'images/skins/cardBack_3.png');
        this.load.image('cardBack_4', 'images/skins/cardBack_4.png');
        this.load.image('cardBack_5', 'images/skins/cardBack_5.png');
        this.load.image('bg_0', 'images/skins/bg_0.png');
        this.load.image('bg_1', 'images/skins/bg_1.png');
        this.load.image('bg_2', 'images/skins/bg_2.png');
        this.load.image('bg_3', 'images/skins/bg_3.png');
        this.load.image('bg_4', 'images/skins/bg_4.png');
        this.load.image('bg_5', 'images/skins/bg_5.png');
        this.load.image('mainBg', 'images/mainBg.png');
        this.load.image('mainSelector', 'images/mainSelector.png');
        this.load.image('blur', 'images/blur.png');
        this.load.image('infoMenu', 'images/controlInfo.png');
        this.load.image('ageInfo', 'images/ageInfo.png');
        this.load.image('licens', 'images/licens.png');
        this.load.image('pauseTitle', 'images/pause.png');
        this.load.image('selector', 'images/selector.png');
        this.load.image('startEmpty', 'images/startEmpty.png');
        this.load.image('startSelected', 'images/startSelected.png');
        this.load.image('exitEmpty', 'images/exitEmpty.png');
        this.load.image('exitSelected', 'images/exitSelected.png');
        this.load.image('resumeEmpty', 'images/resumeEmpty.png');
        this.load.image('resumeSelected', 'images/resumeSelected.png');
        this.load.image('line', 'images/line.png');
        this.load.image('red', 'particles/red.png');
        this.load.image('green', 'particles/green.png');
        this.load.image('blue', 'particles/blue.png');
        this.load.image('yellow', 'particles/yellow.png');
        this.load.image('purple', 'particles/purple.png');
        this.load.image('orange', 'particles/orange.png');
        for (var n = 1; n <= 48; n++) {
          this.load.image("".concat(n), "images/cards/".concat(n, ".png"));
        }
        this.load.audio('click', 'sounds/click.mp3');
        this.load.audio('win', 'sounds/win.mp3');
        this.load.audio('musik', 'sounds/musik.mp3');
        this.load.audio('chooseCard', 'sounds/chooseCard.mp3');
        this.load.audio('pair', 'sounds/pair.mp3');
      } catch (er) {
        var _window2;
        var startDownloadingError = {
          action: 'startDownloadingError',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window2 = window) === null || _window2 === void 0 || _window2.parent.postMessage(startDownloadingError, parentOrigin);
      }
    }
  }, {
    key: "create",
    value: function create() {
      try {
        var _window3;
        var finishDownload = {
          action: 'finishDownload',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window3 = window) === null || _window3 === void 0 || _window3.parent.postMessage(finishDownload, parentOrigin);
        this.scene.start('MainMenu');
      } catch (er) {
        var _window4;
        var downloadError = {
          action: 'downloadError',
          allGameSessionId: sessionID,
          timeStamp: Date.now()
        };
        (_window4 = window) === null || _window4 === void 0 || _window4.parent.postMessage(downloadError, parentOrigin);
      }
    }
  }]);
  return Preloader;
}(Phaser.Scene);
var preloader = new Preloader();
var _startGame = {
  action: 'startGame',
  allGameSessionId: sessionID,
  gameSessionId: gameId,
  timeStamp: Date.now()
};
var MainMenu = /*#__PURE__*/function (_Phaser$Scene2) {
  _inherits(MainMenu, _Phaser$Scene2);
  var _super2 = _createSuper(MainMenu);
  function MainMenu() {
    _classCallCheck(this, MainMenu);
    return _super2.call(this, {
      key: 'MainMenu'
    });
  }
  _createClass(MainMenu, [{
    key: "create",
    value: function create() {
      var _this2 = this;
      gameState.onMenu = true;
      this.mainBg = this.add.sprite(game.config.width / 2, game.config.height / 2, 'mainBg').setOrigin(0.5);
      this.mainBg.setDisplaySize(game.config.width, game.config.height);
      this.title = this.add.text();
      this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2 + 50, 'exitEmpty').setOrigin(0.5);
      this.btnExit = this.add.sprite(this.btnStart.x, this.btnStart.y + 130, 'exitEmpty').setOrigin(0.5);
      this.btnStart.alpha = 0;
      this.btnExit.alpha = 0;
      this.selector = this.add.sprite(this.btnStart.x, this.btnStart.y, 'mainSelector').setOrigin(0.5);
      this.selector.setDisplaySize(700, 200);
      this.btnStart.setInteractive();
      this.btnExit.setInteractive();
      this.btnStartText = this.add.image(this.btnStart.x, this.btnStart.y, 'startSelected').setOrigin(0.5);

      // this.btnStartText = this.add.text(this.btnStart.x, this.btnStart.y, 'НАЧАТЬ ИГРУ',{
      //     fontFamily: 'RubikOne-Regular',
      //     fontSize: 64,
      //     color: '#1A61B6',
      //     fontStyle: 'normal',
      //     align: 'center'
      // }).setOrigin(0.5);
      this.btnExitText = this.add.image(this.btnExit.x, this.btnExit.y, 'exitEmpty').setOrigin(0.5);
      // this.btnExitText = this.add.text(this.btnExit.x, this.btnExit.y, 'ВЫЙТИ',{
      //     fontFamily: 'RubikOne-Regular',
      //     fontSize: 64,
      //     color: '#fff',
      //     fontStyle: 'normal',
      //     align: 'center'
      // }).setOrigin(0.5);

      this.btnExit.on('pointerdown', this.exit, this);
      this.btnStart.on('pointerdown', this.startGame, this);
      this.input.keyboard.on('keydown-ENTER', this.gameToggle, this);
      document.addEventListener('keydown', function (e) {
        if (e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) {
          _this2.exit();
        }
      });
      this.clickSound = this.sound.add('click', {
        loop: false
      });
      // this.saveScore();
      this.loadScore();
      this.licens = this.add.image(game.config.width - 180, game.config.height - 70, 'licens');
      this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'bold',
        fontSize: '30px',
        fill: '#fff'
      }).setOrigin(0.5);
      this.ageInfo = this.add.image(game.config.width - 150, 100, 'ageInfo');
      this.controlInfo = this.add.image(260, game.config.height - 70, 'infoMenu');
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      highScore = score;
      game_session.highscore = JSON.parse(localStorage.getItem('heighScore_pair'));
      var oldScore = JSON.parse(localStorage.getItem('heighScore_pair'));
      highScore > oldScore ? localStorage.setItem('heighScore_pair', JSON.stringify(highScore)) : highScore = oldScore;
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_pair')) {
        this.hieghScoreText = this.add.text(game.config.width / 2, game.config.height - 100, "".concat(JSON.parse(localStorage.getItem('heighScore_pair'))), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y - 75, 'Рекорд', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (gameState.onMenu === true) {
        if (this.selector.y != this.btnExit.y) {
          this.selector.y = this.btnExit.y + 7;
          this.btnExitText.setTexture('exitSelected');
          this.btnStartText.setTexture('startEmpty');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (gameState.onMenu === true) {
        if (this.selector.y != this.btnStart.y) {
          this.selector.y = this.btnStart.y;
          this.btnExitText.setTexture('exitEmpty');
          this.btnStartText.setTexture('startSelected');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "gameToggle",
    value: function gameToggle() {
      if (gameState.onMenu === true) {
        if (this.selector.y === this.btnStart.y) {
          this.clickSound.play();
          this.startGame();
        } else if (this.selector.y === this.btnExit.y + 7) {
          this.clickSound.play();
          this.exit();
        }
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      gameState.onMenu = false;
      try {
        var _window5;
        _startGame.gameSessionId = generateUUID();
        _startGame.allGameSessionId = sessionID;
        (_window5 = window) === null || _window5 === void 0 || _window5.parent.postMessage(_startGame, parentOrigin);
        this.scene.start('findPair');
      } catch (er) {
        var _window6;
        var startGameError = {
          action: 'startGameError',
          allGameSessionId: sessionID,
          gameSessionId: gameId,
          timeStamp: Date.now()
        };
        (_window6 = window) === null || _window6 === void 0 || _window6.parent.postMessage(startGameError, parentOrigin);
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (gameState.onMenu) {
        if (!posted) {
          var _window7;
          var closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
          };
          (_window7 = window) === null || _window7 === void 0 || _window7.parent.postMessage(closeGameSession, parentOrigin);
          posted = true;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return MainMenu;
}(Phaser.Scene);
var mainMenu = new MainMenu();
var FindPair = /*#__PURE__*/function (_Phaser$Scene3) {
  _inherits(FindPair, _Phaser$Scene3);
  var _super3 = _createSuper(FindPair);
  function FindPair() {
    _classCallCheck(this, FindPair);
    return _super3.call(this, {
      key: 'findPair'
    });
  }
  _createClass(FindPair, [{
    key: "create",
    value: function create() {
      var _this5 = this;
      config.backgroundColor = '#4BB5D4';
      gameState.onMenu = false;
      gameState.onGame = true;
      gameState.onLate = false;
      this.bgImage = this.add.image(game.config.width / 2, game.config.height / 2, "bg_".concat(skinIndex));
      this.bgImage.setOrigin(0.5);
      this.bgImage.setDisplaySize(game.config.width, game.config.height);
      this.numMatches = 0;
      this.canMove = true;
      this.chosenCards = [];
      this.bgmusic = this.sound.add('musik', {
        loop: true,
        volume: 1 / 10
      });
      this.bgmusic.play();
      this.pairSound = this.sound.add('pair', {
        loop: false,
        volume: 0.5
      });
      this.chooseCardSound = this.sound.add('chooseCard', {
        loop: false,
        volume: 0.5
      });
      this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'bold',
        fontSize: '30px',
        fill: '#fff'
      }).setOrigin(0.5);
      var x;
      var y = 32;
      var animalArray = [];
      for (var n = 1; n <= 49; n++) {
        animalArray.push("".concat(n));
      }
      var playArr = [];
      // for (let n = 0; n < numAnimals; n++) {
      //     playArr.push(animalArray[Math.floor(Math.random() * (animalArray.length-1)) === 0 ? 1 : Math.floor(Math.random() * (animalArray.length-1))]);
      // }

      while (playArr.length !== numAnimals) {
        playArr.push(animalArray[Math.floor(Math.random() * (animalArray.length - 1)) === 0 ? 1 : Math.floor(Math.random() * (animalArray.length - 1))]);
        playArr = this.makeUniq(playArr);
      }
      var shuffleArray = [];
      for (var row = 0; row < ROWS; row++) {
        shuffleArray[row] = [];
        for (var col = 0; col < numAnimals; col++) {
          var animalValue = playArr[col];
          shuffleArray[row][col] = animalValue;
        }
      }
      for (var _n = 0; _n < 100; _n++) {
        var rowA = Phaser.Math.Between(0, 1);
        var colA = Phaser.Math.Between(0, numAnimals - 1);
        var rowB = Phaser.Math.Between(0, 1);
        var colB = Phaser.Math.Between(0, numAnimals - 1);
        colB === colA ? colB = Phaser.Math.Between(0, numAnimals - 1) : colB;
        var temp = shuffleArray[rowA][colA];
        shuffleArray[rowA][colA] = shuffleArray[rowB][colB];
        shuffleArray[rowB][colB] = temp;
      }
      this.boardArray = [];
      y = game.config.height / 3;
      this.cards = this.add.group();
      for (var _row = 0; _row < ROWS; _row++) {
        this.boardArray[_row] = [];
        for (var _col = 0; _col < numAnimals; _col++) {
          var theAnimalValue = shuffleArray[_row][_col];
          x = game.config.width / 2 - 275 / 2 + maxImageWidth * _col - boardOffSet;
          var cardBack = this.add.image(x, y + 5, "cardBack_".concat(skinIndex)).setOrigin(0.5);
          cardBack.setDisplaySize(290, 290);
          cardBack.alpha = 0;
          cardBack.depth = 20;
          this.cards.add(cardBack);
          var animal = this.add.image(x, y, theAnimalValue).setOrigin(0.5);
          animal.setDisplaySize(260, 260);
          animal.depth = 10;
          this.boardArray[_row][_col] = {
            animalSelected: false,
            animalValue: shuffleArray[_row][_col],
            cardBackSprite: cardBack,
            cardSelected: false
          };
        }
        y += maxImageHeight;
      }
      this.targets = this.cards.getChildren();
      this.boardArray[0][Math.floor(Math.random() * numAnimals)].cardSelected = true;
      this.selector = this.add.image(this.boardArray[0][0].cardBackSprite.x, this.boardArray[0][0].cardBackSprite.y, 'selector').setOrigin(0.5);
      this.selector.setDisplaySize(300, 300);
      this.selector.depth = 20;
      this.selector.alpha = 0;
      this.time.addEvent({
        delay: 200,
        callbackScope: this,
        callback: function callback() {
          var _this3 = this;
          this.targets.forEach(function (card) {
            card.alpha = 0;
            _this3.canMove = false;
          });
        }
      });
      this.time.addEvent({
        delay: 3000,
        callbackScope: this,
        callback: function callback() {
          var _this4 = this;
          this.targets.forEach(function (card) {
            card.alpha = 1;
            _this4.canMove = true;
            _this4.selector.alpha = 1;
          });
        }
      });
      this.input.keyboard.on('keydown-SPACE', function () {
        _this5.scene.start(nextLvl);
        _this5.bgmusic.stop();
      }, this);
      document.addEventListener('keydown', function (e) {
        if ((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onGame && gameState.onLate == false) {
          _this5.pauseGame();
        }
      });
      this.lvlInfo = this.add.text(game.config.width - 170, game.config.height - 130, "".concat(this.numMatches, "/").concat(numAnimals), {
        fontFamily: 'Rubik-Medium',
        fontSize: 64,
        fill: '#fff'
      }).setOrigin(0.5);
      this.scoreText = this.add.text(75, 80, "\u0421\u0447\u0451\u0442", {
        textAlign: 'center',
        fontFamily: 'Rubik-Regular',
        fontSize: '28px',
        fill: '#D0DBD1'
      });
      this.scoreText2 = this.add.text(75, 120, "".concat(score), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'normal',
        fontSize: '48px',
        fill: '#fff'
      });
      this.loadScore();
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_pair')) {
        this.hieghScoreTitle = this.add.text(75, 200, "\u0420\u0435\u043A\u043E\u0440\u0434", {
          textAlign: 'center',
          fontFamily: 'Rubik-Regular',
          fontSize: '28px',
          fill: '#D0DBD1'
        });
        this.hieghScoreText = this.add.text(75, 240, "".concat(JSON.parse(localStorage.getItem('heighScore_pair'))), {
          textAlign: 'center',
          fontFamily: 'Rubik-Medium',
          fontSize: '36px',
          fill: '#D0DBD1'
        });
      }
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      highScore = score;

      // game_session.highscore = JSON.parse(localStorage.getItem('heighScore_pair'));

      var oldScore = JSON.parse(localStorage.getItem('heighScore_pair'));
      highScore > oldScore ? localStorage.setItem('heighScore_pair', JSON.stringify(highScore)) : highScore = oldScore;
    }
  }, {
    key: "pauseGame",
    value: function pauseGame() {
      if (gameState.onGame) {
        this.scene.launch(pause);
        this.scene.pause();
        pause.depth = 100;
        this.canMove = false;
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (this.canMove && gameState.onGame && gameState.onLate == false) {
        for (var row = 0; row < ROWS; row++) {
          for (var col = 0; col < numAnimals; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row - 1][col]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row - 1][col].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (this.canMove && gameState.onGame && gameState.onLate == false) {
        for (var row = ROWS - 1; row >= 0; row--) {
          for (var col = 0; col < numAnimals; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row + 1][col]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row + 1][col].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorLeft",
    value: function selectorLeft() {
      if (this.canMove && gameState.onGame && gameState.onLate == false) {
        for (var row = 0; row < ROWS; row++) {
          for (var col = 0; col < numAnimals; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row][col - 1]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row][col - 1].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorRight",
    value: function selectorRight() {
      if (this.canMove && gameState.onGame && gameState.onLate == false) {
        for (var row = 0; row < ROWS; row++) {
          for (var col = numAnimals - 1; col >= 0; col--) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row][col + 1]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row][col + 1].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "chooseCard",
    value: function chooseCard() {
      if (this.canMove && gameState.onGame && gameState.onLate == false) {
        for (var row = 0; row < ROWS; row++) {
          for (var col = 0; col < numAnimals; col++) {
            if (this.boardArray[row][col].cardSelected) {
              var obj = this.boardArray[row][col];
              if (obj.animalSelected == true) {
                return;
              }

              // make the cardBackSprite of the selectd object  transparent
              obj.cardBackSprite.alpha = 0;
              obj.animalSelected = true;

              // save the selected object
              this.chosenCards.push(obj);
              this.chooseCardSound.play();
              if (this.chosenCards.length > 1) {
                this.canMove = false;

                // compare the card values
                var g1 = this.chosenCards[0].animalValue;
                var g2 = this.chosenCards[1].animalValue;
                if (g1 == g2) {
                  this.chosenCards.length = 0;
                  this.numMatches++;
                  score += 1;
                  this.saveScore();
                  this.canMove = true;
                  this.pairSound.play();
                } else {
                  this.time.addEvent({
                    delay: 500,
                    callbackScope: this,
                    callback: function callback() {
                      for (var n = 0; n < this.chosenCards.length; n++) {
                        this.chosenCards[n].cardBackSprite.alpha = 1;
                        this.chosenCards[n].animalSelected = false;
                      }
                      this.chosenCards.length = 0;
                      this.canMove = true;
                    }
                  });
                }
              }
              if (this.numMatches == numAnimals) {
                this.time.addEvent({
                  delay: 200,
                  callbackScope: this,
                  callback: function callback() {
                    this.scene.start('nextLvl');
                    this.bgmusic.stop();
                  }
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "makeUniq",
    value: function makeUniq(arr) {
      var uniq = new Set(arr);
      return arr = _toConsumableArray(uniq);
    }
  }, {
    key: "update",
    value: function update() {
      for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < numAnimals; col++) {
          var card = this.boardArray[row][col];
          if (card.cardSelected) {
            this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y - 5);
          }
        }
      }
      this.lvlInfo.setText("".concat(this.numMatches, "/").concat(numAnimals));
      this.scoreText2.setText("".concat(score));
    }
  }]);
  return FindPair;
}(Phaser.Scene);
var findPair = new FindPair();
var Pause = /*#__PURE__*/function (_Phaser$Scene4) {
  _inherits(Pause, _Phaser$Scene4);
  var _super4 = _createSuper(Pause);
  function Pause() {
    _classCallCheck(this, Pause);
    return _super4.call(this, {
      key: 'pause'
    });
  }
  _createClass(Pause, [{
    key: "create",
    value: function create() {
      var _this6 = this;
      gameState.onPause = true;
      gameState.onGame = false;
      gameState.onMenu = false;
      try {
        var _window8;
        var gamePause = {
          action: 'gamePause',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          timeStamp: Date.now()
        };
        (_window8 = window) === null || _window8 === void 0 || _window8.parent.postMessage(gamePause, parentOrigin);
        this.clickSound = this.sound.add('click', {
          loop: false
        });
        this.blur = this.add.image(game.config.width / 2, game.config.height / 2, "bg_".concat(skinIndex)).setOrigin(0.5);
        this.blur.setDisplaySize(game.config.width, game.config.height);
        this.blur.alpha = 1;
        this.pauseBg = this.add.image(game.config.width / 2, game.config.height / 4, 'pauseTitle').setOrigin(0.5);
        this.resumeBtn = this.add.image(game.config.width / 2, game.config.height / 2 + 50, 'resumeBtn').setOrigin(0.5);
        this.exitBtn = this.add.image(this.resumeBtn.x, this.resumeBtn.y + 130, 'exitBtn').setOrigin(0.5);
        this.resumeBtn.alpha = 0;
        this.exitBtn.alpha = 0;
        this.selector = this.add.image(this.resumeBtn.x, this.resumeBtn.y, 'mainSelector').setOrigin(0.5);
        this.selector.setDisplaySize(700, 200);

        // this.resumeText = this.add.text(this.resumeBtn.x, this.resumeBtn.y, 'ПРОДОЛЖИТЬ', {fontFamily: 'RubikOne-Regular', fontSize: '64px', fill: '#1A61B6'}).setOrigin(0.5);
        // this.exitText = this.add.text(this.exitBtn.x, this.exitBtn.y, 'ВЫЙТИ', {fontFamily: 'RubikOne-Regular', fontSize: '64px', fill: '#fff'}).setOrigin(0.5);
        this.resumeText = this.add.image(this.resumeBtn.x, this.resumeBtn.y, 'resumeSelected').setOrigin(0.5);
        this.exitText = this.add.image(this.exitBtn.x, this.exitBtn.y, 'exitEmpty').setOrigin(0.5);
        this.resumeBtn.setInteractive();
        this.exitBtn.setInteractive();
        this.resumeBtn.on('pointerdown', this.resumeGame, this);
        this.exitBtn.on('pointerdown', this.exitGame, this);
        this.scoreText = this.add.text(game.config.width / 2 - 150, game.config.height - 100, "".concat(score), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.scoreTitle = this.add.text(this.scoreText.x, this.scoreText.y - 75, 'Счет', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
        this.loadScore();
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'bold',
          fontSize: '30px',
          fill: '#fff'
        }).setOrigin(0.5);
        document.addEventListener('keydown', function (e) {
          if (e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) {
            _this6.exitGame();
          }
        });
      } catch (er) {
        var _window9;
        var gamePauseError = {
          action: 'gamePauseError',
          allGameSessionId: _startGame.allGameSessionId,
          gameSessionId: _startGame.gameSessionId,
          score: gameState.score,
          timeStamp: Date.now()
        };
        (_window9 = window) === null || _window9 === void 0 || _window9.parent.postMessage(gamePauseError, parentOrigin);
      }
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_pair')) {
        this.hieghScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100, "".concat(JSON.parse(localStorage.getItem('heighScore_pair'))), {
          fontFamily: 'Rubik-Medium',
          fontStyle: 'normal',
          fontSize: '64px',
          fill: '#fff'
        }).setOrigin(0.5);
        this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y - 75, 'Рекорд', {
          fontFamily: 'Rubik-Regular',
          fontSize: '48px',
          fill: '#D0DBD1'
        }).setOrigin(0.5);
        this.line = this.add.image(game.config.width / 2, game.config.height - 100, 'line').setOrigin(0.5);
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (gameState.onPause) {
        if (this.selector.y != this.exitBtn.y) {
          this.selector.y = this.exitBtn.y + 7;
          this.resumeText.setTexture('resumeEmpty');
          this.exitText.setTexture('exitSelected');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (gameState.onPause) {
        if (this.selector.y != this.resumeBtn.y) {
          this.selector.y = this.resumeBtn.y;
          this.resumeText.setTexture('resumeSelected');
          this.exitText.setTexture('exitEmpty');
          this.clickSound.play();
        }
      }
    }
  }, {
    key: "gameToggle",
    value: function gameToggle() {
      if (gameState.onPause) {
        if (this.selector.y === this.resumeBtn.y) {
          this.clickSound.play();
          this.resumeGame();
        } else if (this.selector.y === this.exitBtn.y + 7) {
          this.clickSound.play();
          this.exitGame();
        }
      }
    }
  }, {
    key: "resumeGame",
    value: function resumeGame() {
      if (gameState.onLate) {
        try {
          var _window10;
          var gameResume = {
            action: 'gameResume',
            allGameSessionId: _startGame.allGameSessionId,
            gameSessionId: _startGame.gameSessionId,
            score: score,
            timeStamp: Date.now()
          };
          (_window10 = window) === null || _window10 === void 0 || _window10.parent.postMessage(gameResume, parentOrigin);
        } catch (er) {
          var _indow;
          var gameResumeError = {
            action: 'gameResumeError',
            allGameSessionId: _startGame.allGameSessionId,
            gameSessionId: _startGame.gameSessionId,
            score: score,
            timeStamp: Date.now()
          };
          (_indow = indow) === null || _indow === void 0 || _indow.parent.postMessage(gameResumeError, parentOrigin);
        }
        this.scene.resume(lateGame);
        this.scene.stop();
        gameState.onPause = false;
        gameState.onGame = true;
        setTimeout(function () {
          lateGame.canMove = true;
        }, 1000);
      } else {
        try {
          var _window11;
          var _gameResume = {
            action: 'gameResume',
            allGameSessionId: _startGame.allGameSessionId,
            gameSessionId: _startGame.gameSessionId,
            score: score,
            timeStamp: Date.now()
          };
          (_window11 = window) === null || _window11 === void 0 || _window11.parent.postMessage(_gameResume, parentOrigin);
        } catch (er) {
          var _indow2;
          var _gameResumeError = {
            action: 'gameResumeError',
            allGameSessionId: _startGame.allGameSessionId,
            gameSessionId: _startGame.gameSessionId,
            score: score,
            timeStamp: Date.now()
          };
          (_indow2 = indow) === null || _indow2 === void 0 || _indow2.parent.postMessage(_gameResumeError, parentOrigin);
        }
        this.scene.resume(findPair);
        this.scene.stop();
        gameState.onPause = false;
        gameState.onGame = true;
        setTimeout(function () {
          findPair.canMove = true;
        }, 1000);
      }
    }
  }, {
    key: "exitGame",
    value: function exitGame() {
      if (gameState.onPause == true) {
        if (!posted) {
          var _window12, _window13;
          var closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
          };
          var gameOver = {
            action: 'gameOver',
            allGameSessionId: sessionID,
            gameSessionId: _startGame.gameSessionId,
            score: score,
            lvl: gameState.stage,
            timeStamp: Date.now()
          };
          (_window12 = window) === null || _window12 === void 0 || _window12.parent.postMessage(gameOver, parentOrigin);
          (_window13 = window) === null || _window13 === void 0 || _window13.parent.postMessage(closeGameSession, parentOrigin);
          posted = true;
        }
      }
    }
  }]);
  return Pause;
}(Phaser.Scene);
var pause = new Pause();
var NextLvl = /*#__PURE__*/function (_Phaser$Scene5) {
  _inherits(NextLvl, _Phaser$Scene5);
  var _super5 = _createSuper(NextLvl);
  function NextLvl() {
    _classCallCheck(this, NextLvl);
    return _super5.call(this, {
      key: 'nextLvl'
    });
  }
  _createClass(NextLvl, [{
    key: "create",
    value: function create() {
      var _window14;
      gameState.stage += 1;
      var levelUp = {
        action: 'levelUp',
        allGameSessionId: sessionID,
        gameSessionId: _startGame.gameSessionId,
        level: gameState.stage,
        score: score,
        timeStamp: Date.now()
      };
      (_window14 = window) === null || _window14 === void 0 || _window14.parent.postMessage(levelUp, parentOrigin);
      this.bgImage = this.add.image(game.config.width / 2, game.config.height / 2, "bg_".concat(skinIndex));
      this.bgImage.setOrigin(0.5);
      this.bgImage.setDisplaySize(game.config.width, game.config.height);
      this.add.particles('blue', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 150,
        lifespan: 3200,
        gravityY: 400
      });
      this.add.particles('red', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 100,
        lifespan: 3200,
        gravityY: 400
      });
      this.add.particles('green', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 150,
        lifespan: 3200,
        gravityY: 400
      });
      this.add.particles('yellow', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 100,
        lifespan: 3200,
        gravityY: 400
      });
      this.add.particles('purple', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 150,
        lifespan: 3200,
        gravityY: 400
      });
      this.add.particles('orange', {
        x: {
          min: 0,
          max: game.config.width
        },
        scale: {
          min: 0.1,
          max: 0.6
        },
        rotate: {
          start: 0,
          end: 360
        },
        speed: 150,
        lifespan: 3200,
        gravityY: 400
      });
      this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'bold',
        fontSize: '30px',
        fill: '#fff'
      }).setOrigin(0.5);
      this.winSound = this.sound.add('win', {
        loop: false,
        volume: 0.5
      });
      this.title = this.add.text(game.config.width / 2, game.config.height / 2, 'Уровень пройден!', {
        fontFamily: 'Arial',
        fontSize: 48,
        color: '#fff',
        fontStyle: 'bold',
        align: 'center'
      }).setOrigin(0.5);
      var startNextLvl = this.time.addEvent({
        delay: 3000,
        callback: this.startNext,
        callbackScope: this
      });
      this.winSound.play();
      if (skinIndex < 5) {
        skinIndex += 1;
      } else {
        skinIndex = 0;
      }
    }
  }, {
    key: "startNext",
    value: function startNext() {
      if (numAnimals <= 9) {
        numAnimals += 1;
        boardOffSet += 150;
      } else if (numAnimals !== 12) {
        numAnimals += 2;
      }
      if (numAnimals == 12) {
        numAnimals = 12;
        boardOffSet = 300;
      }
      if (numAnimals <= 5) {
        this.scene.start('findPair');
      } else {
        this.scene.start('lateGame');
      }
    }
  }]);
  return NextLvl;
}(Phaser.Scene);
var nextLvl = new NextLvl();
var LateGame = /*#__PURE__*/function (_Phaser$Scene6) {
  _inherits(LateGame, _Phaser$Scene6);
  var _super6 = _createSuper(LateGame);
  function LateGame() {
    _classCallCheck(this, LateGame);
    return _super6.call(this, {
      key: 'lateGame'
    });
  }
  _createClass(LateGame, [{
    key: "create",
    value: function create() {
      var _this7 = this;
      gameState.onGame = true;
      gameState.onLate = true;
      this.bgImage = this.add.image(game.config.width / 2, game.config.height / 2, "bg_".concat(skinIndex));
      this.bgImage.setOrigin(0.5);
      this.bgImage.setDisplaySize(game.config.width, game.config.height);
      this.bgmusic = this.sound.add('musik', {
        loop: true,
        volume: 1 / 10
      });
      this.bgmusic.play();
      this.pairSound = this.sound.add('pair', {
        loop: false,
        volume: 0.5
      });
      this.chooseCardSound = this.sound.add('chooseCard', {
        loop: false,
        volume: 0.5
      });
      var collsOffset = 0;
      switch (numAnimals) {
        case 6:
          boardRows = 3;
          boardCols = 4;
          boardOffSet = 210;
          collsOffset = -65;
          break;
        case 7:
          boardRows = 2;
          boardCols = 7;
          boardOffSet = 530;
          collsOffset = -150;
          break;
        case 8:
          boardRows = 4;
          boardCols = 4;
          boardOffSet = 210;
          collsOffset = 30;
          break;
        case 9:
          boardRows = 3;
          boardCols = 6;
          boardOffSet = 420;
          collsOffset = -65;
          break;
        case 10:
          boardRows = 4;
          boardCols = 5;
          boardOffSet = 350;
          collsOffset = 65;
          break;
        case 12:
          boardRows = 4;
          boardCols = 6;
          boardOffSet = 420;
          collsOffset = 65;
          break;
        default:
          boardRows = 4;
          boardCols = 6;
          boardOffSet = 420;
          collsOffset = 65;
          break;
      }
      this.numMatches = 0;
      this.canMove = true;
      this.chosenCards = [];
      var animalArray = [];
      for (var n = 1; n <= 49; n++) {
        animalArray.push("".concat(n));
      }
      var playArr = [];
      while (playArr.length !== numAnimals) {
        playArr.push(animalArray[Math.floor(Math.random() * (animalArray.length - 1)) === 0 ? 1 : Math.floor(Math.random() * (animalArray.length - 1))]);
        playArr = this.makeUniq(playArr);
      }
      var shuffleArray = [];
      for (var row = 0; row < ROWS; row++) {
        shuffleArray[row] = [];
        for (var col = 0; col < numAnimals; col++) {
          var animalValue = playArr[col];
          shuffleArray[row][col] = animalValue;
        }
      }
      for (var _n2 = 0; _n2 < 100; _n2++) {
        var rowA = Phaser.Math.Between(0, 1);
        var colA = Phaser.Math.Between(0, numAnimals - 1);
        var rowB = Phaser.Math.Between(0, 1);
        var colB = Phaser.Math.Between(0, numAnimals - 1);
        colB === colA ? colB = Phaser.Math.Between(0, numAnimals - 1) : colB;
        var temp = shuffleArray[rowA][colA];
        shuffleArray[rowA][colA] = shuffleArray[rowB][colB];
        shuffleArray[rowB][colB] = temp;
      }
      this.boardArray = [];
      var x = game.config.width / 2;
      var y = game.config.height / 4 - collsOffset;
      this.cards = this.add.group();
      var animals = [];
      var allCards = [];
      for (var _row2 = 0; _row2 < boardRows; _row2++) {
        this.boardArray[_row2] = [];
        for (var _col2 = 0; _col2 < boardCols; _col2++) {
          // let theAnimalValue = shuffleArray[row][col];
          x = game.config.width / 2 - 210 / 2 + (maxImageWidth - 90) * _col2 - boardOffSet;
          var cardBack = this.add.image(x, y + 5, "cardBack_".concat(skinIndex)).setOrigin(0.5);
          cardBack.setDisplaySize(210, 210);
          cardBack.alpha = 0;
          cardBack.depth = 20;
          this.cards.add(cardBack);
          var animal = this.add.image(x, y, "cardBack_".concat(skinIndex)).setOrigin(0.5);
          animal.setDisplaySize(180, 180);
          animal.depth = 10;
          animals.push(animal);
          this.boardArray[_row2][_col2] = {
            animalSelected: false,
            animalValue: null,
            //shuffleArray[row][col],
            cardBackSprite: cardBack,
            cardSelected: false
          };
          allCards.push(this.boardArray[_row2][_col2]);
        }
        y += maxImageHeight - 90;
        // x += maxImageWidth;
      }

      var index = 0;
      for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < numAnimals; j++) {
          animals[index].setTexture(shuffleArray[i][j]).setDisplaySize(180, 180);
          allCards[index].animalValue = shuffleArray[i][j];
          index++;
        }
      }
      document.addEventListener('keydown', function (e) {
        if ((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onGame && gameState.onLate) {
          _this7.pauseGame();
        }
      });
      this.targets = this.cards.getChildren();
      this.boardArray[0][0].cardSelected = true;
      this.selector = this.add.image(this.boardArray[0][0].cardBackSprite.x, this.boardArray[0][0].cardBackSprite.y, 'selector').setOrigin(0.5);
      this.selector.setDisplaySize(225, 225);
      this.selector.depth = 50;
      this.selector.alpha = 0;
      this.time.addEvent({
        delay: 200,
        callbackScope: this,
        callback: function callback() {
          var _this8 = this;
          this.targets.forEach(function (card) {
            card.alpha = 0;
            _this8.canMove = false;
          });
        }
      });
      this.time.addEvent({
        delay: 3000,
        callbackScope: this,
        callback: function callback() {
          var _this9 = this;
          this.targets.forEach(function (card) {
            card.alpha = 1;
            _this9.canMove = true;
            _this9.selector.alpha = 1;
          });
        }
      });
      this.input.keyboard.on('keydown-SPACE', function () {
        _this7.scene.start(nextLvl);
        _this7.bgmusic.stop();
      }, this);
      this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, "".concat(game_version), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'bold',
        fontSize: '30px',
        fill: '#fff'
      }).setOrigin(0.5);
      this.lvlInfo = this.add.text(game.config.width - 170, game.config.height - 130, "".concat(this.numMatches, "/").concat(numAnimals), {
        fontFamily: 'Rubik-Medium',
        fontSize: 64,
        fill: '#fff'
      }).setOrigin(0.5);
      this.scoreText = this.add.text(75, 80, "\u0421\u0447\u0451\u0442", {
        textAlign: 'center',
        fontFamily: 'Rubik-Regular',
        fontSize: '28px',
        fill: '#D0DBD1'
      });
      this.scoreText2 = this.add.text(75, 120, "".concat(score), {
        fontFamily: 'Rubik-Medium',
        fontStyle: 'normal',
        fontSize: '48px',
        fill: '#fff'
      });
      this.loadScore();
    }
  }, {
    key: "loadScore",
    value: function loadScore() {
      if (localStorage.getItem('heighScore_pair')) {
        this.hieghScoreTitle = this.add.text(75, 200, "\u0420\u0435\u043A\u043E\u0440\u0434", {
          textAlign: 'center',
          fontFamily: 'Rubik-Regular',
          fontSize: '28px',
          fill: '#D0DBD1'
        });
        this.hieghScoreText = this.add.text(75, 240, "".concat(JSON.parse(localStorage.getItem('heighScore_pair'))), {
          textAlign: 'center',
          fontFamily: 'Rubik-Medium',
          fontSize: '36px',
          fill: '#D0DBD1'
        });
      }
    }
  }, {
    key: "saveScore",
    value: function saveScore() {
      highScore = score;

      // game_session.highscore = JSON.parse(localStorage.getItem('heighScore_pair'));

      var oldScore = JSON.parse(localStorage.getItem('heighScore_pair'));
      highScore > oldScore ? localStorage.setItem('heighScore_pair', JSON.stringify(highScore)) : highScore = oldScore;
    }
  }, {
    key: "pauseGame",
    value: function pauseGame() {
      if (gameState.onGame && gameState.onLate) {
        this.scene.launch(pause);
        this.scene.pause();
        pause.depth = 100;
        this.canMove = false;
      }
    }
  }, {
    key: "selectorUp",
    value: function selectorUp() {
      if (this.canMove && gameState.onGame && gameState.onLate) {
        for (var row = 0; row < boardRows; row++) {
          for (var col = 0; col < boardCols; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row - 1][col]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row - 1][col].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorDown",
    value: function selectorDown() {
      if (this.canMove && gameState.onGame && gameState.onLate) {
        for (var row = boardRows - 1; row >= 0; row--) {
          for (var col = 0; col < boardCols; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row + 1][col]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row + 1][col].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorLeft",
    value: function selectorLeft() {
      if (this.canMove && gameState.onGame && gameState.onLate) {
        for (var row = 0; row < boardRows; row++) {
          for (var col = 0; col < boardCols; col++) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row][col - 1]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row][col - 1].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "selectorRight",
    value: function selectorRight() {
      if (this.canMove && gameState.onGame && gameState.onLate) {
        for (var row = 0; row < boardRows; row++) {
          for (var col = boardCols - 1; col >= 0; col--) {
            if (this.boardArray[row][col].cardSelected && this.boardArray[row][col + 1]) {
              this.boardArray[row][col].cardSelected = false;
              this.boardArray[row][col + 1].cardSelected = true;
            }
          }
        }
      }
    }
  }, {
    key: "chooseCard",
    value: function chooseCard() {
      if (this.canMove && gameState.onGame && gameState.onLate) {
        for (var row = 0; row < boardRows; row++) {
          for (var col = 0; col < boardCols; col++) {
            if (this.boardArray[row][col].cardSelected) {
              var obj = this.boardArray[row][col];
              if (obj.animalSelected == true) {
                return;
              }

              // make the cardBackSprite of the selectd object  transparent
              obj.cardBackSprite.alpha = 0;
              obj.animalSelected = true;

              // save the selected object
              this.chosenCards.push(obj);
              this.chooseCardSound.play();
              if (this.chosenCards.length > 1) {
                this.canMove = false;

                // compare the card values
                var g1 = this.chosenCards[0].animalValue;
                var g2 = this.chosenCards[1].animalValue;
                if (g1 == g2) {
                  // match
                  // this.yaySound.play();
                  this.pairSound.play();
                  this.chosenCards.length = 0;
                  score += 1;
                  this.saveScore();
                  this.numMatches++;
                  this.canMove = true;
                } else {
                  // no match
                  // this.aweSound.play();

                  this.time.addEvent({
                    delay: 500,
                    callbackScope: this,
                    callback: function callback() {
                      for (var n = 0; n < this.chosenCards.length; n++) {
                        this.chosenCards[n].cardBackSprite.alpha = 1;
                        this.chosenCards[n].animalSelected = false;
                      }
                      this.chosenCards.length = 0;
                      this.canMove = true;
                    }
                  });
                }
              }
              if (this.numMatches == numAnimals) {
                // game over - restart new game
                this.time.addEvent({
                  delay: 200,
                  callbackScope: this,
                  callback: function callback() {
                    this.bgmusic.stop();
                    this.scene.start('nextLvl');
                  }
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "makeUniq",
    value: function makeUniq(arr) {
      var uniq = new Set(arr);
      return arr = _toConsumableArray(uniq);
    }
  }, {
    key: "update",
    value: function update() {
      for (var row = 0; row < boardRows; row++) {
        for (var col = 0; col < boardCols; col++) {
          var card = this.boardArray[row][col];
          if (card.cardSelected) {
            this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y - 5);
          }
          // else{
          //     this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y)
          // }
        }
      }

      this.lvlInfo.setText("".concat(this.numMatches, "/").concat(numAnimals));
      this.scoreText2.setText("".concat(score));
    }
  }]);
  return LateGame;
}(Phaser.Scene);
var lateGame = new LateGame();
var config = {
  type: Phaser.CANVAS,
  width: 1920,
  height: 1080,
  backgroundColor: '#8EDD73',
  parent: 'phaser-example',
  scene: [preloader, mainMenu, findPair, nextLvl, lateGame, pause],
  scale: {
    mode: Phaser.Scale.FIT
  },
  audio: {
    disableWebAudio: true,
    noAudio: true
  }
};
var sessionID;
var parentOrigin;
var gameId = generateUUID();
sessionID = generateUUID();
if (document.referrer) {
  parentOrigin = document.referrer;
  console.log(parentOrigin);
} else {
  parentOrigin = parentOrigin;
}
try {
  var _window15;
  var startGameSession = {
    action: 'startGameSession',
    allGameSessionId: sessionID,
    timeStamp: Date.now()
  };
  (_window15 = window) === null || _window15 === void 0 || _window15.parent.postMessage(startGameSession, parentOrigin);
} catch (er) {
  var _window16;
  var startGameSessionError = {
    action: 'startGameSessionError',
    allGameSessionId: sessionID,
    timeStamp: Date.now()
  };
  (_window16 = window) === null || _window16 === void 0 || _window16.parent.postMessage(startGameSessionError, parentOrigin);
}
var game = new Phaser.Game(config);
var gameState = {
  onGame: false,
  onMenu: false,
  onPause: false,
  isOver: false,
  onLate: false,
  stage: 1
};
var game_version = 'v 0.3.0s';
var numAnimals = 2;
var maxImageWidth = 300;
var maxImageHeight = 300;
var offsetX = 10;
var gameHeight = maxImageHeight * 3;
var ROWS = 2; //numAnimals <= 7 ? 2 : 3;
var skinIndex = 0;
var boardRows;
var boardCols;
var boardOffSet = 0;
var score = 0;
var highScore;
var posted = false;