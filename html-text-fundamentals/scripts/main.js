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
  textarea.value = '<h1>My short story</h1>\n<p>I am a policewoman and my name is Trish.</p>\n<p>My legs are made of cardboard and I am married to a fish.</p>';
  drawOutput();
});
solution2.addEventListener("click", function() {
  textarea.value = '<ul>\n<li>milk</li>\n<li>eggs</li>\n<li>bread</li>\n<li>hummus</li>\n</ul>';
  drawOutput();
});
solution3.addEventListener("click", function() {
  textarea.value = '<ol>\n<li>Drive to the end of the road</li>\n<li>Turn right</li>\n<li>Go straight across the first two roundabouts</li>\n<li>Turn left at the third roundabout</li>\n<li>The school is on your right, 300 meters up the road</li>\n</ol>';
  drawOutput();
});
solution4.addEventListener("click", function() {
  textarea.value = '<h1>Quick hummous recipe</h1>\n\n<p>This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>\n\n<p>Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.</p>\n\n<h2>Ingredients</h2>\n\n<ul>\n<li>1 can (400g) of chick peas (garbanzo beans)</li>\n<li>175g of tahini</li>\n<li>6 sundried tomatoes</li>\n<li>Half a red pepper</li>\n<li>A pinch of cayenne pepper</li>\n<li>1 clove of garlic</li>\n<li>A dash of olive oil</li>\n</ul>\n\n<h2>Instructions</h2>\n\n<ol>\n<li>Remove the skin from the garlic, and chop coarsely.</li>\n<li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>\n<li>Add all the ingredients into a food processor.</li>\n<li>Process all the ingredients into a paste.</li>\n<li>If you want a coarse "chunky" hummus, process it for a short time.</li>\n<li>If you want a smooth hummus, process it for a longer time.</li>\n</ol>\n\n<p>For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>\n\n<h2>Storage</h2>\n\n<p>Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you\'ve made it. If it starts to become fizzy, you should definitely discard it.</p>\n\n<p>Hummus is suitable for freezing; you should thaw it and use it within a couple of months.</p>';
  drawOutput();
});
solution5.addEventListener("click", function() {
  textarea.value = '<h1>Important notice</h1>\n<p>On <strong>Sunday January 9th 2010</strong>, a gang of <em>goths</em> were spotted stealing <strong><em>several</em> garden gnomes</strong> from a shopping center in downtown <strong>Milwaukee</strong>. They were all wearing <em>green jumpsuits</em> and <em>silly hats</em>, and seemed to be having a whale of a time. If anyone has <strong>any</strong> information about this incident, please contact the police <strong>now</strong>.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
