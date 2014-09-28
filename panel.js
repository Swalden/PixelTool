// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*

var image;
window.onload = function() {
    var input = document.getElementById('input');

  input.addEventListener("change", previewFile);

function previewFile() { //calls the function named previewFile()
      var preview = document.querySelector('img'); //selects the query named img
      var file = document.querySelector('input[type=file]').files[0]; //sames as here
      
      var reader = new FileReader();
      reader.onloadend = function () {
          preview.src = reader.result;
          image =  reader.result;
      };

      if (file) {
          reader.readAsDataURL(file); //reads the data as a URL

      } else {
          preview.src = "";

      }
  }



};



document.querySelector('#executescript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "code", 
        content: "document.body.insertAdjacentHTML('afterbegin', '<img class = \"overlayImagePerfectPixels\" style = \"z-index: 900000000;opacity: 0.1; position: absolute; top: 0; left: 0; width: 100%;\" src =\"" + image + "\">')"  
    });
}, false);

document.querySelector('#insertscript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "script", content: "inserted-script.js"});

}, false);

document.querySelector('#insertmessagebutton').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
    sendObjectToInspectedPage({action: "script", content: "messageback-script.js"});
}, false);


















