var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution1 = document.getElementById("solution1");
var solution2 = document.getElementById("solution2");
var solution3 = document.getElementById("solution3");
var solution4 = document.getElementById("solution4");
var solution5 = document.getElementById("solution5");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution1.addEventListener("click", function() {
textarea.value = '<dl>\n  <dt>Bacon</dt>\n  <dd>The glue that binds the world together.</dd>\n  <dt>Eggs</dt>\n  <dd>The glue that binds the cake together.</dd>\n  <dt>Coffee</dt>\n  <dd>The drink that gets the world running in the morning.</dd>\n  <dd>A light brown color.</dd>\n</dl>';
  drawOutput();
});
solution2.addEventListener("click", function() {
textarea.value = '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n  <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
  drawOutput();
});
solution3.addEventListener("click", function() {
textarea.value = '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>';
  drawOutput();
});


textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
