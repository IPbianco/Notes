"use strict";

window.addEventListener("load", function() {

  var createButton
  var notes = []
  var linksList

  createButton = document.getElementById("create")
  linksList = document.getElementById("links-list")

  createButton.addEventListener("click", function() {
    notes.push(new Note(document.getElementById("new-note").value))
    console.log(notes.slice(-1)[0])
    linksList.innerHTML += `<li><a>${notes.slice(-1)[0].getSummary()}</a></li>`
  })
})
