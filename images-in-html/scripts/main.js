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
	textarea.value = '<img src="https://i0.wp.com/temita.jp/wp-content/uploads/2015/03/sdfas.jpeg"\n     alt="石原さとみ"\n     width="1000"\n     height="500"\n     title="石原さとみ">';
	drawOutput();
});
solution2.addEventListener("click", function() {
	textarea.value = '<figure>\n  <img src="http://www.asianjunkie.com/wp-content/uploads/2015/04/IshiharaSatomiMeiji.png"\n       alt="石原さとみ"\n       width="1000"\n       height="500">\n  <figcaption>石原さとみ</figcaption>\n</figure>';
	drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
