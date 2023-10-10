var startGame = {
    action: 'startGame',
    allGameSessionId : sessionID,
    gameSessionId: gameId,
    timeStamp: Date.now()
}

class MainMenu extends Phaser.Scene{
    constructor(){
        super({key:'MainMenu'});
    }

    create(){
        gameState.onMenu = true;
        this.mainBg = this.add.sprite(game.config.width/2, game.config.height/2, 'mainBg').setOrigin(0.5);
        this.mainBg.setDisplaySize(game.config.width, game.config.height); 
        this.title = this.add.text();

        this.btnStart = this.add.sprite(game.config.width/2, game.config.height/2+50, 'exitEmpty').setOrigin(0.5);
        this.btnExit = this.add.sprite(this.btnStart.x, this.btnStart.y+130, 'exitEmpty').setOrigin(0.5);

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

        document.addEventListener('keydown',(e)=>{
            if(e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196){
                this.exit()
            }
        })

        this.clickSound = this.sound.add('click', {loop:false});
        // this.saveScore();
        this.loadScore();
        this.licens = this.add.image(game.config.width - 180, game.config.height - 70, 'licens');
        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.ageInfo = this.add.image(game.config.width - 150, 100, 'ageInfo');
        this.controlInfo = this.add.image(260, game.config.height - 70, 'infoMenu');

    }

    saveScore(){
        highScore = score;
    
        game_session.highscore = JSON.parse(localStorage.getItem('heighScore_pair'));
        
        let oldScore = JSON.parse(localStorage.getItem('heighScore_pair'));
        highScore > oldScore ? localStorage.setItem('heighScore_pair', JSON.stringify(highScore)) : highScore = oldScore;
    }

    loadScore(){
        if(localStorage.getItem('heighScore_pair')){
            console.log(localStorage.getItem('heighScore_pair'))
            this.hieghScoreText = this.add.text(game.config.width/2, game.config.height - 100, `${JSON.parse(localStorage.getItem('heighScore_pair'))}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y-75, 'Рекорд', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
        }
    }

    selectorDown(){
        if(gameState.onMenu===true){
            if(this.selector.y != this.btnExit.y){
              this.selector.y = this.btnExit.y+7
              this.btnExitText.setTexture('exitSelected')
              this.btnStartText.setTexture('startEmpty')
              this.clickSound.play();
            }
        }
    }

    selectorUp(){
        if(gameState.onMenu===true){
            if(this.selector.y != this.btnStart.y){
                this.selector.y = this.btnStart.y
                this.btnExitText.setTexture('exitEmpty');
                this.btnStartText.setTexture('startSelected')
                this.clickSound.play();
            }
        }
    }

    gameToggle(){
        if(gameState.onMenu === true){
            if(this.selector.y === this.btnStart.y){
                this.clickSound.play();
                this.startGame();
                
            }
            else if(this.selector.y === this.btnExit.y+7){
                this.clickSound.play();
                this.exit();
            }
        }
    }

    startGame(){
        gameState.onMenu = false;

        startGame.gameSessionId = uid();
        startGame.allGameSessionId = sessionID;
        window?.parent.postMessage(startGame, '*');
        console.log(`started game w: allGame - ${startGame.allGameSessionId} and gameId - ${startGame.gameSessionId}`);

        this.scene.start('findPair');
    }
    exit(){
        if(gameState.onMenu){
            let closeGameSession = {
                action: 'closeGameSession',
                allGameSessionId : sessionID,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(closeGameSession, '*');
            console.log('Exit');
        }
    }

    update(){
        
    }
}

let mainMenu = new MainMenu();