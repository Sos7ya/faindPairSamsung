class LateGame extends Phaser.Scene{
    constructor(){
        super({key:'lateGame'});
    }
    create(){
        gameState.onGame = true;
        gameState.onLate = true;

        this.bgImage = this.add.image(game.config.width/2, game.config.height/2, `bg_${skinIndex}`);
        this.bgImage.setOrigin(0.5);
        this.bgImage.setDisplaySize(game.config.width, game.config.height);

        this.bgmusic = this.sound.add('musik', {loop: true, volume: 1/10});
        this.bgmusic.play();

        this.pairSound = this.sound.add('pair', {loop: false, volume: 0.5});

        this.chooseCardSound = this.sound.add('chooseCard', {loop: false, volume: 0.5});
        let collsOffset = 0;
        switch(numAnimals){
            case 6:
                boardRows = 3
                boardCols = 4
                boardOffSet = 210
                collsOffset = -65
                break;
            case 7:
                boardRows = 2
                boardCols = 7
                boardOffSet = 530
                collsOffset = -150
                break;
            case 8:
                boardRows = 4
                boardCols = 4
                boardOffSet = 210
                collsOffset = 30
                break;
            case 9:
                boardRows = 3
                boardCols = 6
                boardOffSet = 420
                collsOffset = -65
                break;
            case 10:
                boardRows = 4
                boardCols = 5
                boardOffSet = 350
                collsOffset = 65
                break;
            case 12:
                boardRows = 4
                boardCols = 6
                boardOffSet = 420
                collsOffset = 65
                break;
            default:
                boardRows = 4
                boardCols = 6
                boardOffSet = 420
                collsOffset = 65
                break;
        }

        this.numMatches = 0;
        this.canMove = true;
        this.chosenCards = [];

        let animalArray = [];
        for(let n = 1; n<= 49; n++){
            animalArray.push(`${n}`);
        }

        let playArr = [];

        while(playArr.length !== numAnimals){
            playArr.push(animalArray[Math.floor(Math.random() * (animalArray.length-1)) === 0 ? 1 : Math.floor(Math.random() * (animalArray.length-1))]);
            playArr = this.makeUniq(playArr);
        }

        let shuffleArray = [];
        for(let row = 0; row < ROWS; row++){
            shuffleArray[row] = [];

            for(let col = 0; col < numAnimals; col++){
                let animalValue = playArr[col];

                shuffleArray[row][col] = animalValue;
            }
        }

        for (let n = 0; n < 100; n++) {
			let rowA = Phaser.Math.Between(0, 1);
			let colA = Phaser.Math.Between(0, numAnimals-1);

			let rowB = Phaser.Math.Between(0, 1);
			let colB = Phaser.Math.Between(0, numAnimals-1);

            colB === colA ? colB = Phaser.Math.Between(0, numAnimals-1) : colB

			let temp = shuffleArray[rowA][colA];
			shuffleArray[rowA][colA] = shuffleArray[rowB][colB];
			shuffleArray[rowB][colB] = temp;
		}
        
        this.boardArray = [];
        let x = game.config.width / 2;
        let y = (game.config.height / 4) - (collsOffset);
        this.cards = this.add.group();
        let animals = [];
        let allCards = [];

        for (let row = 0; row < boardRows; row++) {
			this.boardArray[row] = [];

			for (let col = 0; col < boardCols; col++) {
				// let theAnimalValue = shuffleArray[row][col];
                x = (game.config.width/2-210/2) + ((maxImageWidth-90)*col) - boardOffSet;

				let cardBack = this.add.image(x, y+5, `cardBack_${skinIndex}`).setOrigin(0.5);
				cardBack.setDisplaySize(210, 210);
				cardBack.alpha = 0;
				cardBack.depth = 20;
                this.cards.add(cardBack);

				let animal = this.add.image(x, y, `cardBack_${skinIndex}`).setOrigin(0.5);
				animal.setDisplaySize(180, 180);
				animal.depth = 10;
                animals.push(animal);

				this.boardArray[row][col] = {
					animalSelected: false,
					animalValue: null, //shuffleArray[row][col],
					cardBackSprite: cardBack,
                    cardSelected: false
				}
                allCards.push(this.boardArray[row][col]);
			}
			y += maxImageHeight - 90;
            // x += maxImageWidth;
		}
        let index = 0
        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < numAnimals; j++){
                animals[index].setTexture(shuffleArray[i][j]).setDisplaySize(180, 180);
                allCards[index].animalValue = shuffleArray[i][j];
                index++
            }
        }

        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onGame&&gameState.onLate){
                this.pauseGame()
            }
        })

        console.log(animals[0].texture.key)

        this.targets = this.cards.getChildren();

        this.boardArray[0][0].cardSelected = true
        this.selector = this.add.image(this.boardArray[0][0].cardBackSprite.x, this.boardArray[0][0].cardBackSprite.y, 'selector').setOrigin(0.5);
        this.selector.setDisplaySize(225, 225);
        this.selector.depth = 50;
        this.selector.alpha = 0

        this.time.addEvent({
            delay:200,
            callbackScope: this,
            callback: function(){
                this.targets.forEach(card =>{
                    card.alpha = 0
                    this.canMove = false
                })
            }
        })

        this.time.addEvent({
            delay: 3000,
            callbackScope: this,
            callback: function(){
                this.targets.forEach(card => {
                    card.alpha=1
                    this.canMove = true
                    this.selector.alpha = 1
                });
            }

        })

        
       console.log(numAnimals)

       this.input.keyboard.on('keydown-SPACE', ()=>{this.scene.start(nextLvl); this.bgmusic.stop();}, this)

       this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        
        this.lvlInfo = this.add.text(game.config.width - 170, game.config.height - 130, `${this.numMatches}/${numAnimals}`, {fontFamily: 'Rubik-Medium', fontSize: 64, fill: '#fff'}).setOrigin(0.5);
        
        this.scoreText = this.add.text(75, 80, `Счёт`, { textAlign: 'center', fontFamily: 'Rubik-Regular', fontSize: '28px', fill: '#D0DBD1' });
        this.scoreText2 = this.add.text(75, 120, `${score}`, { fontFamily:'Rubik-Medium', fontStyle:'normal', fontSize: '48px', fill: '#fff'});

        this.loadScore()
    
    }

    loadScore(){
        if(localStorage.getItem('heighScore_pair')){
            this.hieghScoreTitle = this.add.text(75, 200, `Рекорд`, { textAlign: 'center', fontFamily: 'Rubik-Regular', fontSize: '28px', fill: '#D0DBD1'  });
            this.hieghScoreText = this.add.text(75, 240, `${JSON.parse(localStorage.getItem('heighScore_pair'))}`, { textAlign: 'center', fontFamily: 'Rubik-Medium', fontSize: '36px', fill: '#D0DBD1' });
        }
        
    }

    saveScore(){
        highScore = score;
    
        // game_session.highscore = JSON.parse(localStorage.getItem('heighScore_pair'));
        
        let oldScore = JSON.parse(localStorage.getItem('heighScore_pair'));
        highScore > oldScore ? localStorage.setItem('heighScore_pair', JSON.stringify(highScore)) : highScore = oldScore;
    }

    pauseGame(){
        if(gameState.onGame&&gameState.onLate){
            this.scene.launch(pause);
            this.scene.pause();
            pause.depth = 100
            this.canMove = false
        }        
    }

    selectorUp(){
        if(this.canMove&&gameState.onGame && gameState.onLate){
            for(let row = 0; row < boardRows; row++){
                for(let col = 0; col < boardCols; col++){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row-1][col]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row-1][col].cardSelected = true
                    }
                }
            }
        }
    }

    selectorDown(){
        if(this.canMove&&gameState.onGame && gameState.onLate){
            for(let row = boardRows-1; row >= 0; row--){
                for(let col = 0; col < boardCols; col++){
                if(this.boardArray[row][col].cardSelected&&this.boardArray[row+1][col]){
                    this.boardArray[row][col].cardSelected = false
                    this.boardArray[row+1][col].cardSelected = true
                }
            }
        }
        }
    }

    selectorLeft(){
        if(this.canMove&&gameState.onGame && gameState.onLate){
            for(let row = 0; row < boardRows; row++){
                for(let col = 0; col < boardCols; col++){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row][col-1]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row][col-1].cardSelected = true
                    }
                }
            }
        }
    }

    selectorRight(){
        if(this.canMove&&gameState.onGame && gameState.onLate){
            for(let row = 0; row < boardRows; row++){
                for(let col = boardCols-1; col >= 0; col--){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row][col+1]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row][col+1].cardSelected = true
                    }
                }
            }
        }
    }

    chooseCard(){
        if(this.canMove&&gameState.onGame && gameState.onLate){
            for(let row = 0; row < boardRows; row++){
                for(let col = 0; col < boardCols; col++){
                    if(this.boardArray[row][col].cardSelected){
                        let obj = this.boardArray[row][col];
    
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
                            let g1 = this.chosenCards[0].animalValue;
                            let g2 = this.chosenCards[1].animalValue;
                            
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
                                    callback: function() {
                                        for (let n = 0; n < this.chosenCards.length; n++) {
                                            this.chosenCards[n].cardBackSprite.alpha = 1;
                
                                            this.chosenCards[n].animalSelected = false;
                                        }
                
                                        this.chosenCards.length = 0;
                                        this.canMove = true;
                                    },
                                });
                            }
                        }
                
                        if (this.numMatches == numAnimals) {
                            // game over - restart new game
                            this.time.addEvent({
                                delay: 200,
                                callbackScope: this,
                                callback: function() {
                                    this.bgmusic.stop();
                                    this.scene.start('nextLvl');
                                },
                            });
                        }
                    }
                }
            }
        }
    }

    makeUniq(arr){
        let uniq = new Set(arr);
        return arr = [...uniq];
    }

    update(){
        for(let row = 0; row<boardRows; row++){
            for(let col = 0; col < boardCols; col++){
                let card = this.boardArray[row][col];
                if(card.cardSelected){
                    this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y-5)
                }
                // else{
                //     this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y)
                // }
            }
        }

        this.lvlInfo.setText(`${this.numMatches}/${numAnimals}`);
        this.scoreText2.setText(`${score}`);
    }
}

var lateGame = new LateGame();