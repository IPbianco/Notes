"use strict";

(function(exports) {
  function NoteView(note) {
    this._note = note
  }

  NoteView.prototype.getNote = function() {
    return this._note
  };

  function _addTag(text, tag) {
    return `<${tag}>` + text + `</${tag}>`
  }

  NoteView.prototype.getNoteHTML = function() {
    return this.getNoteHeaderHTML() + _addTag(this.getNote().getText(),"div")
  }

  NoteView.prototype.getNoteHeaderHTML = function() {
    return _addTag("Note", "h2")
  }

  exports.NoteView = NoteView
})(this)
