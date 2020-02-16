document.addEventListener('DOMContentLoaded', function(event) {
    var currentBG = "red";
    var newBG = "";
    document.querySelector("#changeColor").addEventListener('click', function(){ 
        switch (currentBG) {
            case "red":
                newBG = "blue";
            break;

            case "blue":
                newBG = "red";
            break;
        }

        currentBG = newBG;
        document.body.style.background = newBG;
    });
  });


if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('serviceworker.js').then(function() {
      console.log('CLIENT: service worker registration complete.');
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
  }

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
    console.log("Boudda show an install prompt.");
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  showAddToHomeScreen();

});

function showAddToHomeScreen() {

    var a2hsBtn = document.querySelector(".ad2hs-prompt");
  
    a2hsBtn.style.display = "block";
  
    a2hsBtn.addEventListener("click", addToHomeScreen);
  
}

function addToHomeScreen() {  var a2hsBtn = document.querySelector(".ad2hs-prompt");  // hide our user interface that shows our A2HS button
  a2hsBtn.style.display = 'none';  // Show the prompt
  deferredPrompt.prompt();  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then(function(choiceResult){

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }

  deferredPrompt = null;

});}