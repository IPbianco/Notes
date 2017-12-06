"use strict";

function NoteListView(notesList) {
  this._notesList = notesList
}

NoteListView.prototype.getNotesList = function() {
  return this._notesList
}

function addLi(text) {
  return "<li>" + text + "</li>"
}

function addUl(text) {
  return "<ul>" + text + "</ul>"
}

NoteListView.prototype.getListHTML = function() {
  var listHTML = ""
  this.getNotesList().getNotes().forEach(function(note) {
    listHTML += addLi(note.getSummary())
  })
  return addUl(listHTML)
}
