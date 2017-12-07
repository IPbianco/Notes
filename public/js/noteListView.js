"use strict";

(function (exports) {
  function NoteListView(notesList) {
    this._notesList = notesList;
  }

  NoteListView.prototype.getNotesList = function() {
    return this._notesList;
  }

  function _addTag(text, tag, attribute = "") {
    return `<${tag}${attribute}>` + text + `</${tag}>`
  }

  NoteListView.prototype.getListHTML = function() {
    var listHTML = "";
    var index = 1
    this.getNotesList().getNotes().forEach(function(note) {
      listHTML += _addTag((_addTag(note.getSummary(),"a", ` href=#${index}`)),"li");
      index ++
    })
    return _addTag(listHTML, "ul");
  }

  exports.NoteListView = NoteListView;
})(this);
