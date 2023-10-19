class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super({key:'Preloader'});

        this.loadText;
    }

    preload ()
    {
        try{
            let startDownloading = {
                action: 'startDownloading',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(startDownloading, '*');

        this.loadText = this.add.text(game.config.width/2, game.config.height/2, 'ЗАГРУЗКА...', { fontFamily: 'RubikOne-Regular', fontSize: 64, color: '#e3f2ed' });
        this.loadText1 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-Regular', fontSize: 64, color: '#e3f2ed' }).alpha = 0;
        this.loadText2 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-Medium', fontSize: 64, color: '#e3f2ed' }).alpha = 0;
        this.loadText3 = this.add.text(game.config.width/2, game.config.height/2, 'Loading ...', { fontFamily: 'Rubik-SemiBold', fontSize: 64, color: '#e3f2ed' }).alpha = 0;
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

        for(let n = 1; n<= 48; n++){
            this.load.image(`${n}`, `images/cards/${n}.png`);
        }

        this.load.audio('click', 'sounds/click.mp3');
        this.load.audio('win', 'sounds/win.mp3');
        this.load.audio('musik', 'sounds/musik.mp3');
        this.load.audio('chooseCard', 'sounds/chooseCard.mp3');
        this.load.audio('pair', 'sounds/pair.mp3');
    }
    catch(er){
        let startDownloadingError = {
            action: 'startDownloadingError',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
        }
        window?.parent.postMessage(startDownloadingError, '*');
    }

    }
    create ()
    {
        try{
            let finishDownload = {
                action: 'finishDownload',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(finishDownload, '*')
        }
        catch(er){
            let downloadError = {
                action: 'downloadError',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(downloadError, '*')
        }
        this.scene.start('MainMenu');
        
    }
}

let preloader = new Preloader()