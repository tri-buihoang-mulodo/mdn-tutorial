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

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
