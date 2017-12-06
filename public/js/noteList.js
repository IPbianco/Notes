"use strict";

(function (exports) {

  function NoteList() {
    this._notes = []
  }

  NoteList.prototype.getNotes = function() {
    return this._notes
  }

  NoteList.prototype.addNote = function(text, constructor = Note) {
    this._notes.push(new constructor(text))
  }

  NoteList.prototype.getLast = function(note) {
    return this.getNotes().slice(-1)[0]
  }

  exports.NoteList = NoteList;

})(this);
