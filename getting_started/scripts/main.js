var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution1 = document.getElementById("solution1");
var solution2 = document.getElementById("solution2");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution1.addEventListener("click", function() {
  textarea.value = '<em>This is my text.</em>';
  drawOutput();
});
solution2.addEventListener("click", function() {
  textarea.value = '<p>A link to my <a href="https://www.mozilla.org/" title="The Mozilla homepage" target="_blank">favourite website</a>.</p>';
  drawOutput();
});
solution3.addEventListener("click", function() {
  textarea.value = '<p>I really enjoy <strong>playing the drums</strong>. One of my favourite drummers is Neal Peart, who\
 plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>.\
 My favourite Rush album is currently <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p>\
<img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
