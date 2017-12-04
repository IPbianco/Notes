"use strict";

window.addEventListener("load", function() {

  var createButton
  var notes = []

  createButton = document.getElementById("create")

  createButton.addEventListener("click", function() {
    notes.push(new Note(document.getElementById("new-note").value))
    console.log(notes)
  })
})
