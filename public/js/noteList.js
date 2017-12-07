"use strict";

(function (exports) {

  function NoteList() {
    this._notes = []
    this._counter = 1
  }

  NoteList.prototype.getNotes = function() {
    return this._notes
  }

  NoteList.prototype.getLast = function(note) {
    return this.getNotes().slice(-1)[0]
  }

  NoteList.prototype.addNote = function(text, constructor = Note) {
    this._notes.push(new constructor(text, this._counter))
    this._counter ++
  }

  exports.NoteList = NoteList;

})(this);
