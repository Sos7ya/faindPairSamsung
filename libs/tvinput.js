//console.log = function(message) {
  //document.getElementById('divlog').innerHTML += message + ' ';
//};
//console.warn = console.log;
window.addEventListener('load', function() {

    SpatialNavigation.init();
    SpatialNavigation.add({
      selector: '.focusable'
    });

    if (typeof AndroidBridge !== 'undefined') {
      initializeAndroidTVInput();
  }
   
    // All valid events.
    var validEvents = [
        'sn:willmove',
        'sn:enter-down',
        'sn:enter-up',
      ];

      var eventHandler = function(evt) {
        
        if(evt.type == 'sn:enter-down'){
          mainMenu.gameToggle()
          pause.gameToggle()
          findPair.chooseCard()
          lateGame.chooseCard()
          return
        }
        //document.getElementById('divlog').innerHTML += evt.detail.direction + '\n';
        switch(evt.detail?.direction){
          case 'up':
              mainMenu.selectorUp()
              pause.selectorUp()
              findPair.selectorUp()
              lateGame.selectorUp()
            break;
            case 'down':
              mainMenu.selectorDown()
              pause.selectorDown()
              findPair.selectorDown()
              lateGame.selectorDown()
            break;
            case 'left':
              findPair.selectorLeft()
              lateGame.selectorLeft()
            break;
            case 'right':
              findPair.selectorRight()
              lateGame.selectorRight()
            break;
        }
       
      };

      validEvents.forEach(function(type) {
        window.addEventListener(type, eventHandler);
      });
    
    SpatialNavigation.makeFocusable();
    SpatialNavigation.focus();
  });

  function initializeAndroidTVInput(){
AndroidBridge.onKeyEvent(function(event) {

  if (event.isTVKeyEvent) {
      var keyCode = event.keyCode;
      switch (keyCode) {
          case AndroidBridge.KEYCODE_DPAD_CENTER:
              mainGame.selectEmoji()
              mainMenu.gameStart()
              break;
          case AndroidBridge.KEYCODE_DPAD_UP:
            mainGame.selectorUp()
              break;
          case AndroidBridge.KEYCODE_DPAD_DOWN:
            mainGame.selectorDown()
              break;
          case AndroidBridge.KEYCODE_DPAD_LEFT:
            mainGame.selectorLeft()
              break;
          case AndroidBridge.KEYCODE_DPAD_RIGHT:
            mainGame.selectorRight()
              break;
          case AndroidBridge.KEYCODE_BACK:
              
              break;
          default:
              break;
      }
  }
});
  }