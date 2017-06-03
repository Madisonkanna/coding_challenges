$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var words = $("p").text().split(" ");
  $("p").empty();
  for (var i = 0; i < words.length; i++){

    var spanWord = $("<span>").append(words[i]);

    $("p").append(spanWord);
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

});