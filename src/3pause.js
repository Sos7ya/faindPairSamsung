class Pause extends Phaser.Scene{
    constructor(){
        super({key:'pause'});
    }

    create(){
        gameState.onPause = true;
        gameState.onGame = false;
        gameState.onMenu = false;

        try{
            let gamePause = {
                action: 'gamePause',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePause, parentOrigin);


        this.clickSound = this.sound.add('click', {loop:false});

        this.blur = this.add.image(game.config.width/2, game.config.height/2, `bg_${skinIndex}`).setOrigin(0.5);
        this.blur.setDisplaySize(game.config.width, game.config.height);
        this.blur.alpha = 1;
        this.pauseBg = this.add.image(game.config.width/2, game.config.height/4, 'pauseTitle').setOrigin(0.5);

        this.resumeBtn = this.add.image(game.config.width/2, game.config.height/2+50, 'resumeBtn').setOrigin(0.5);
        this.exitBtn = this.add.image(this.resumeBtn.x, this.resumeBtn.y+130, 'exitBtn').setOrigin(0.5);
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

        

        this.scoreText = this.add.text(game.config.width/2-150, game.config.height -100, `${score}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
        this.scoreTitle = this.add.text(this.scoreText.x, this.scoreText.y-75, 'Счет', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
        this.loadScore();

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)){
                this.exitGame()
            }
        })

    }
    catch(er){
        let gamePauseError = {
            action: 'gamePauseError',
            allGameSessionId: startGame.allGameSessionId,
            gameSessionId: startGame.gameSessionId,
            score: gameState.score,
            timeStamp : Date.now()
        }

        window?.parent.postMessage(gamePauseError, parentOrigin);
    }
    }

    loadScore(){
        if(localStorage.getItem('heighScore_pair')){
            this.hieghScoreText = this.add.text(game.config.width/2+150, game.config.height - 100, `${JSON.parse(localStorage.getItem('heighScore_pair'))}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.hieghScoreTitle = this.add.text(this.hieghScoreText.x, this.hieghScoreText.y-75, 'Рекорд', {fontFamily: 'Rubik-Regular', fontSize: '48px', fill: '#D0DBD1'}).setOrigin(0.5);
            this.line = this.add.image(game.config.width/2, game.config.height - 100, 'line').setOrigin(0.5);
        }
    }

    selectorDown(){
        if(gameState.onPause){
            if(this.selector.y != this.exitBtn.y){
                this.selector.y = this.exitBtn.y+7;
                this.resumeText.setTexture('resumeEmpty');
                this.exitText.setTexture('exitSelected');
                this.clickSound.play();
            }
        }
    }

    selectorUp(){
        if(gameState.onPause){
            if(this.selector.y != this.resumeBtn.y){
                this.selector.y = this.resumeBtn.y
                this.resumeText.setTexture('resumeSelected');
                this.exitText.setTexture('exitEmpty');
                this.clickSound.play();
            }
        }
    }

    gameToggle(){
        if(gameState.onPause){
            if(this.selector.y === this.resumeBtn.y){
                this.clickSound.play();
                this.resumeGame();
                
            }
            else if(this.selector.y === this.exitBtn.y+7){
                this.clickSound.play();
                this.exitGame();
            }
        }
    }

    resumeGame(){
        if(gameState.onLate){
            try{
                let gameResume = {
                    action: 'gameResume',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: score,
                    timeStamp : Date.now()
                }
    
                window?.parent.postMessage(gameResume, parentOrigin);
            }
            catch(er){
                let gameResumeError = {
                    action: 'gameResumeError',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: score,
                    timeStamp : Date.now()
                }

                indow?.parent.postMessage(gameResumeError, parentOrigin);
            }
            this.scene.resume(lateGame);
            this.scene.stop();
            gameState.onPause = false;
            gameState.onGame = true;
            setTimeout(()=>{
                lateGame.canMove = true;
            }, 1000);
        }
        else{

            try{
                let gameResume = {
                    action: 'gameResume',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: score,
                    timeStamp : Date.now()
                }
    
                window?.parent.postMessage(gameResume, parentOrigin);
            }
            catch(er){
                let gameResumeError = {
                    action: 'gameResumeError',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: score,
                    timeStamp : Date.now()
                }

                indow?.parent.postMessage(gameResumeError, parentOrigin);
            }

            this.scene.resume(findPair);
            this.scene.stop();
            gameState.onPause = false;
            gameState.onGame = true;
            setTimeout(()=>{
                findPair.canMove = true;
            }, 1000);
        }
    }

    exitGame(){
        if(gameState.onPause==true){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                }
                let gameOver = {
                    action: 'gameOver',
                    allGameSessionId : sessionID,
                    gameSessionId : startGame.gameSessionId,
                    score : score,
                    lvl: gameState.stage,
                    timeStamp : Date.now()
                }
                window?.parent.postMessage(gameOver, parentOrigin);
                window?.parent.postMessage(closeGameSession, parentOrigin);
                posted = true;
            }
        }
    }
}

var pause = new Pause();