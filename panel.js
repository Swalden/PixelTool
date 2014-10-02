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
       var controls = document.querySelector('.controls');
      var file = document.querySelector('input[type=file]').files[0]; //sames as here
      preview.style.display = "block";
      controls.style.display = "block";
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



var topValue;
var bottomValue;
var leftValue;
var rightValue;
var opacity = document.getElementById('opacity');
var opacityValue = document.getElementById('opacityValue');
opacityValue.innerHTML = opacity.value;
transparency = opacity.value/100; 
var topElement = document.getElementById('top');
var leftElement = document.getElementById('left');

topElement.addEventListener("input", function() {
   topValue = topElement.value;
     sendObjectToInspectedPage({action: "code", 
        content: "document.getElementById('overlayImagePerfectPixels').style.top=\"" + topValue + "px\""
    });
 });
leftElement.addEventListener("input", function() {
   leftValue = leftElement.value;
    sendObjectToInspectedPage({action: "code", 
        content: "document.getElementById('overlayImagePerfectPixels').style.left=\"" + leftElement + "px\""
    });
 });

opacity.addEventListener("input", function() {
  opacityValue.innerHTML = opacity.value;
  transparency = opacity.value/100;
  console.log(transparency);
   sendObjectToInspectedPage({action: "code", 
        content: "document.getElementById('overlayImagePerfectPixels').style.opacity=\"" + transparency + "\""
    });
});

document.querySelector('#executescript').addEventListener('click', function() {
  injectImage();
}, false);

document.querySelector('#insertscript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "script", content: "inserted-script.js"});
}, false);

function injectImage() {
   //Inject script to clear
  // sendObjectToInspectedPage({action: "script", content: "inserted-script.js"});
    sendObjectToInspectedPage({action: "code", 
        content: "if(document.getElementById('overlayImagePerfectPixels')) {} else {document.body.insertAdjacentHTML('afterbegin', '<img id = \"overlayImagePerfectPixels\" class = \"overlayImagePerfectPixels\" style = \"z-index: 900000000; pointer-events: none; opacity: " + transparency + "; position: absolute; top:" + topValue + "px; bottom: " + bottomValue + "px; right: " + rightValue + "px; left: " + leftValue + "px; width: 100%;\" src =\"" + image + "\">')};"  
    });  
}

// document.querySelector('#insertmessagebutton').addEventListener('click', function() {
//     sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
//     sendObjectToInspectedPage({action: "script", content: "messageback-script.js"});
// }, false);


















