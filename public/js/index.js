"use strict";

window.addEventListener("load", function() {

  var content = document.getElementById("content");
  var controller = new Controller(content, new NoteList(), new HeaderView())

  controller._setMainView()
  controller._setupButtonToShowNotes()
});
