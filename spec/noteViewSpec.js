"use strict";

(function (exports) {

  function FakeNote(text) {
    this._text = text;
  }

  FakeNote.prototype.getText = function () {
    return this._text;
  }

  var fakeNote = new FakeNote("Ignacio is the best at table tennis")

  var noteview = new NoteView(fakeNote);

  function testGetNote() {
    return assert.returns(noteview.getNote(), fakeNote)
  }

  function testGetNoteHTML() {
    return assert.returns(noteview.getNoteHTML(), `<h2>Note</h2><div>${fakeNote.getText()}</div>`)
  }

  function testGetNoteHeaderHTML() {
    return assert.returns(noteview.getNoteHeaderHTML(), '<h2>Note</h2>')
  }

  exports.testGetNote = testGetNote
  exports.testGetNoteHTML = testGetNoteHTML
  exports.testGetNoteHeaderHTML= testGetNoteHeaderHTML

})(this)
