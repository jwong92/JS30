function pageready() {
    "use strict";

    //capture each div element
    //on keypress, associate that element to that particular sound
    var allKeys = document.querySelectorAll("[class^='key']");
    var allAudio = document.getElementsByTagName("audio");

    for(let i=0; i<allKeys.length; i++) {
        function changeCursor() {
            allKeys[i].style.cursor = "pointer";
        }//End Change Cursor
        function getKeyCode(e) {
            let audioKey = allAudio[i].getAttribute('data-key');
            let clickedKey = allKeys[i].getAttribute('data-key');
            var keyCode = e.keyCode;
            var playAudio = document.querySelector("audio[data-key='"+audioKey+"']");

            if(e.keyCode == audioKey) {
                //play the audio associated with that audiokey
                playAudio.play();
            } else if (audioKey == clickedKey) {
                playAudio.play();
            }
        }//End getKeyCode

        function changeBackground(e) {
            //get the keycode
            //for that keycode, get the associatd div element
            //change the background color
            var keyCode = e.keyCode;
            var divElement = document.querySelector("div[data-key='"+keyCode+"']");
            divElement.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        }
        allKeys[i].addEventListener("mouseover", changeCursor);
        allKeys[i].addEventListener("click", getKeyCode);
        document.addEventListener("keypress", getKeyCode);
        document.addEventListener("keypress", changeBackground);
    }
    // function revertBackground(e) {
    //     var keyCode = e.keyCode;
    //     var divElement = document.querySelector("div[data-key='"+§ªkeyCode+"']");
    //     console.log(divElement);
    //     divElement.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    // }
    // document.addEventListener("keyup", revertBackground);

}//End page load


window.onload = pageready;
