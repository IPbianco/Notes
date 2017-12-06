"use strict";

(function(exports) {
  function NoteView(note) {
    this._note = note
  }

  NoteView.prototype.getNote = function() {
    return this._note
  };

  function addDiv(text) {
    return '<div>'+ text + '</div>'
  }

  NoteView.prototype.getNoteHTML = function() {
    return addDiv(this.getNote().getText())
  }

  exports.NoteView = NoteView
})(this)
