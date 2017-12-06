"use strict";

(function (exports) {
  function NoteListView(notesList) {
    this._notesList = notesList;
  }

  NoteListView.prototype.getNotesList = function() {
    return this._notesList;
  }

  function _addLi(text) {
    return "<li>" + text + "</li>";
  }

  function _addUl(text) {
    return "<ul>" + text + "</ul>";
  }

  NoteListView.prototype.getListHTML = function() {
    var listHTML = "";
    this.getNotesList().getNotes().forEach(function(note) {
      listHTML += _addLi(note.getSummary());
    })
    return _addUl(listHTML);
  }

  exports.NoteListView = NoteListView;
})(this);
