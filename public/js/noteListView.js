"use strict";

(function (exports) {
  function NoteListView(notesList) {
    this._notesList = notesList;
  }

  NoteListView.prototype.getNotesList = function() {
    return this._notesList;
  }

  function _addTag(text, tag) {
    return `<${tag}>` + text + `</${tag}>`
  }

  NoteListView.prototype.getListHTML = function() {
    var listHTML = "";
    this.getNotesList().getNotes().forEach(function(note) {
      listHTML += _addTag((_addTag(note.getSummary(),"a")),"li");
    })
    return _addTag(listHTML, "ul");
  }

  exports.NoteListView = NoteListView;
})(this);
