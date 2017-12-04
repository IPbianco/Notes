"use strict";

window.addEventListener("load", function() {

  var createButton
  var notes = []
  var linksList
  var content
  var newNote

  content = document.getElementById("content")

  content.innerHTML = '<h1>Notes</h1>' +
  '<input type="text" id="new-note" placeholder="Enter new note">' +
  '<button type="button" id="create">Create</button>' +
  '<div id="links">'+
    '<ul id="links-list">'+
    '</ul>'+
  '</div>'+
  '<h2>Note</h2>'+
  '<div id="current-note">'+
  '</div>'

  createButton = document.getElementById("create")
  linksList = document.getElementById("links-list")

  createButton.addEventListener("click", function() {
    newNote = document.getElementById("new-note")
    notes.push(new Note(newNote.value))
    linksList.innerHTML += `<li><a>${notes.slice(-1)[0].getSummary()}</a></li>`
    newNote.value = ""
  })
})
