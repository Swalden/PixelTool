// This is included and executed in the inspected page




function inserted() {
    remove('.overlayImagePerfectPixels');

}
inserted(); 

function remove(el) {
  var toRemove = document.querySelector(el);

  toRemove.parentNode.removeChild(toRemove);
}