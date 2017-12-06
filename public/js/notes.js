"use strict";

(function (exports) {

  function Notes() {
    this._notes = []
  }

  Notes.prototype.getNotes = function() {
    return this._notes
  }

  Notes.prototype.addNote = function(text, constructor = Note) {
    this._notes.push(new constructor(text))
  }

  Notes.prototype.getLast = function(note) {
    return this.getNotes().slice(-1)[0]
  }

  exports.Notes = Notes;

})(this);
