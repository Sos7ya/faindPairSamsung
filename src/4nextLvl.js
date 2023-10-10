class NextLvl extends Phaser.Scene{
    constructor(){
        super({key:'nextLvl'});
    }
    create(){

        gameState.stage+=1;

        var levelUp = {
            action: 'levelUp',
            allGameSessionId : sessionID,
            gameSessionId : startGame.gameSessionId,
            level: gameState.stage,
            score: score,
            timeStamp: Date.now()
        }
        window?.parent.postMessage(levelUp, '*');

        this.bgImage = this.add.image(game.config.width/2, game.config.height/2, `bg_${skinIndex}`);
        this.bgImage.setOrigin(0.5);
        this.bgImage.setDisplaySize(game.config.width, game.config.height);

        this.add.particles('blue', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 150,
            lifespan: 3200,
            gravityY: 400
        });

        this.add.particles('red', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 100,
            lifespan: 3200,
            gravityY: 400
        })

        this.add.particles('green', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 150,
            lifespan: 3200,
            gravityY: 400
        })

        this.add.particles('yellow', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 100,
            lifespan: 3200,
            gravityY: 400
        })

        this.add.particles('purple', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 150,
            lifespan: 3200,
            gravityY: 400
        })

        this.add.particles('orange', {
            x: { min: 0, max: game.config.width },
            scale: {min: 0.1, max: 0.6},
            rotate:{start: 0, end: 360},
            speed: 150,
            lifespan: 3200,
            gravityY: 400
        })

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);

        this.winSound = this.sound.add('win', {loop: false, volume: 0.5});
        this.title = this.add.text(game.config.width/2, game.config.height/2, 'Уровень пройден!', {
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
        if(skinIndex < 5){
            skinIndex+=1
        }
        else{
            skinIndex = 0
        }
    }

    startNext(){
        
        if(numAnimals <=9){
            numAnimals+=1
            boardOffSet+=150
        }
        else if(numAnimals!==12){
            numAnimals+=2
        }
        if(numAnimals==12){
            numAnimals = 12
            boardOffSet = 300
        }

        if(numAnimals <=5){
            this.scene.start('findPair');
        }
        else{
            this.scene.start('lateGame');
        }
    }
}

var nextLvl = new NextLvl();