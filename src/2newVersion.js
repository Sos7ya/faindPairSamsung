class FindPair extends Phaser.Scene{
    constructor(){
        super({key:'findPair'});
    }
    create(){
        config.backgroundColor = '#4BB5D4';
        gameState.onMenu = false;
        gameState.onGame = true;
        gameState.onLate = false;
        
        this.bgImage = this.add.image(game.config.width/2, game.config.height/2, `bg_${skinIndex}`);
        this.bgImage.setOrigin(0.5);
        this.bgImage.setDisplaySize(game.config.width, game.config.height);
        this.numMatches = 0;
        this.canMove = true;
        this.chosenCards = [];

        this.bgmusic = this.sound.add('musik', {loop: true, volume: 1/10});
        this.bgmusic.play();

        this.pairSound = this.sound.add('pair', {loop: false, volume: 0.5});

        this.chooseCardSound = this.sound.add('chooseCard', {loop: false, volume: 0.5});

        this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);

        let x
        let y = 32;

        let animalArray = [];
        for(let n = 1; n <= 49; n++){
            animalArray.push(`${n}`);
        }

       let playArr = [];
        // for (let n = 0; n < numAnimals; n++) {
        //     playArr.push(animalArray[Math.floor(Math.random() * (animalArray.length-1)) === 0 ? 1 : Math.floor(Math.random() * (animalArray.length-1))]);
        // }

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
        y = (game.config.height / 3);
        this.cards = this.add.group();

        for (let row = 0; row < ROWS; row++) {
			this.boardArray[row] = [];

			for (let col = 0; col < numAnimals; col++) {
				let theAnimalValue = shuffleArray[row][col];

                x = (game.config.width/2 - 275/2) + (maxImageWidth*col) - boardOffSet;
                
				let cardBack = this.add.image(x, y+5, `cardBack_${skinIndex}`).setOrigin(0.5);
				cardBack.setDisplaySize(290, 290);
				cardBack.alpha = 0;
				cardBack.depth = 20;
                
                this.cards.add(cardBack);

				let animal = this.add.image(x, y, theAnimalValue).setOrigin(0.5);
				animal.setDisplaySize(260, 260);
				animal.depth = 10;

				this.boardArray[row][col] = {
					animalSelected: false,
					animalValue: shuffleArray[row][col],
					cardBackSprite: cardBack,
                    cardSelected: false
				}
			}

			y += maxImageHeight;
		}

        this.targets = this.cards.getChildren();

        this.boardArray[0][Math.floor(Math.random()*numAnimals)].cardSelected = true
        this.selector = this.add.image(this.boardArray[0][0].cardBackSprite.x, this.boardArray[0][0].cardBackSprite.y, 'selector').setOrigin(0.5);
        this.selector.setDisplaySize(300, 300);
        this.selector.depth = 20;
        this.selector.alpha = 0;

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
        
        this.input.keyboard.on('keydown-SPACE', ()=>{this.scene.start(nextLvl); this.bgmusic.stop();}, this)
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196) && gameState.onGame&& gameState.onLate==false){
                this.pauseGame()
            }
        })

        
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
        if(gameState.onGame){
            this.scene.launch(pause);
            this.scene.pause();
            pause.depth = 100
            this.canMove = false
        }        
    }

    selectorUp(){
        if(this.canMove&&gameState.onGame && gameState.onLate==false){
            for(let row = 0; row < ROWS; row++){
                for(let col = 0; col < numAnimals; col++){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row-1][col]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row-1][col].cardSelected = true
                    }
                }
            }
        }
    }

    selectorDown(){
        if(this.canMove&&gameState.onGame && gameState.onLate==false){
            for(let row = ROWS-1; row >= 0; row--){
                for(let col = 0; col < numAnimals; col++){
                if(this.boardArray[row][col].cardSelected&&this.boardArray[row+1][col]){
                    this.boardArray[row][col].cardSelected = false
                    this.boardArray[row+1][col].cardSelected = true
                }
            }
        }
        }
    }

    selectorLeft(){
        if(this.canMove&&gameState.onGame && gameState.onLate==false){
            for(let row = 0; row < ROWS; row++){
                for(let col = 0; col < numAnimals; col++){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row][col-1]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row][col-1].cardSelected = true
                    }
                }
            }
        }
    }

    selectorRight(){
        if(this.canMove&&gameState.onGame && gameState.onLate==false){
            for(let row = 0; row < ROWS; row++){
                for(let col = numAnimals-1; col >= 0; col--){
                    if(this.boardArray[row][col].cardSelected&&this.boardArray[row][col+1]){
                        this.boardArray[row][col].cardSelected = false
                        this.boardArray[row][col+1].cardSelected = true
                    }
                }
            }
        }
    }

    chooseCard(){
        if(this.canMove && gameState.onGame && gameState.onLate==false){
            for(let row = 0; row < ROWS; row++){
                for(let col = 0; col < numAnimals; col++){
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
                                this.chosenCards.length = 0;
                                this.numMatches++;
                                score+=1;
                                this.saveScore();
                                this.canMove = true;
                                this.pairSound.play();
                            } else {
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
                            this.time.addEvent({
                                delay: 200,
                                callbackScope: this,
                                callback: function() {
                                    this.scene.start('nextLvl');
                                    this.bgmusic.stop();
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
        for(let row = 0; row<ROWS; row++){
            for(let col = 0; col < numAnimals; col++){
                let card = this.boardArray[row][col];
                if(card.cardSelected){
                    this.selector.setPosition(card.cardBackSprite.x, card.cardBackSprite.y-5)
                }
            }
        }

        this.lvlInfo.setText(`${this.numMatches}/${numAnimals}`);
        this.scoreText2.setText(`${score}`);
    }
}

var findPair = new FindPair();