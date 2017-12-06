"use strict";

window.addEventListener("load", function() {

  var content = document.getElementById("content");
  new Controller(content, new NoteList(), new HeaderView())

});
