'use strict'

/**
* ----------------------------------------------------------------------
* WebRTC Bulit into the App
* myVersion: 0.4.0 
* Description: Checks for getUserMedia Support and checks vendor-prefixes
*       Gets Video stream and Audio stream if supported.
* ----------------------------------------------------------------------
* TODO: Refactor
* ----------------------------------------------------------------------
*/

var app = {
    name: 'nodertcclient',
    html: document.getElementById('app'), // Gets <body id="app"> Element,
};

app.getUserVideoandAudio = function() {
    
    /**
    * Checks User's browser for Navigator
    */
    var hasGetUserMedia = function() {
        // Empty error means no error;
        if( ! ( navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia ) ) {
            return false;
        }
        else {
            return true;
        }
    };

    /**
    *  If no error from getUserMedia, continue.
    */
    if (hasGetUserMedia()) {
        
        // Init Navigator Object with proper prefix. 
        navigator.getUserMedia  = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
        
        var video = document.querySelector('video');
        var constraints = {audio: false, video: true};
      
        /**
        *  navigator.getUserMedia() Success Callback
        */
        var successCallback = function(stream) {
          /**
          * Caches stream so the app doesn't ask once it has permission.
          */ 
          window.stream = stream; // stream available to console
          if (window.URL) {
              video.src = window.URL.createObjectURL(stream);
              console.log('window.URL.createObjectURL(window.stream)');
              console.log(video.src);
          } else {
              video.src = stream;
          }
        };
      
        /**
        *  navigator.getUserMedia() Error Callback
        */
        var errorCallback = function(error){
          console.log('navigator.getUserMedia error: ', error);
        };
        
        /**
        *  Run Navigator
        */
        navigator.getUserMedia(constraints, successCallback, errorCallback);
        
    } // END if (hasGetUserMedia())
}; // END app.getUserVideoandAudio = function()

/**
*  Init WebRTC
*/
/*
app.getUserVideoandAudio();
*/

/*** REFACTORED CODE ***/

/*
var nodertcclient = {
    rtcVideoElement: document.querySelector('video'),
    rtcConstraints: {audio: false, video: true},
};


// Checks User's browser for Navigator
nodertcclient.hasGetUserMedia = function() {
        // Empty error means no error;
        if( ! ( navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia ) ) {
            return false;
        }
        else {
            return true;
        }
};

// navigator.getUserMedia() Success Callback
nodertcclient.successCallback = function(stream) {
    window.stream = stream; // stream available to console
    
    if (window.URL) {
      nodertcclient.rtcVideoElement.src = window.URL.createObjectURL(stream);
    } else {
      nodertcclient.rtcVideoElement.src = stream;
    }
};

// navigator.getUserMedia() Error Callback
nodertcclient.errorCallback = function(error){
  console.log('navigator.getUserMedia error: ', error);
};

nodertcclient.getUserVideoandAudio = function() {
    // If no error from getUserMedia, continue. 
    if (nodertcclient.hasGetUserMedia()) {
      // Init Navigator Object with proper prefix. 
      navigator.getUserMedia  = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
            
      // Run the command. 
      navigator.getUserMedia(nodertcclient.rtcConstraints, nodertcclient.successCallback, nodertcclient.errorCallback);
    }
};

nodertcclient();

*/
    
// END FILE: NO MORE CODE BELOW THIS!