"use strict";

(function () {

  function FakeNote(text) {
    this._text = text;
  }

  FakeNote.prototype.getText = function () {
    return this._text;
  }

  var fakeNote = new FakeNote("Ignacio is the best at table tennis")

  var noteview = new NoteView(fakeNote);

  runner.register(function testGetNote() {
    return assert.returns(noteview.getNote(), fakeNote)
  })

  runner.register(function testGetNoteHTML() {
    return assert.returns(noteview.getNoteHTML(), `<h2>Note</h2><div>${fakeNote.getText()}</div>`)
  })

  runner.register(function testGetNoteHeaderHTML() {
    return assert.returns(noteview.getNoteHeaderHTML(), '<h2>Note</h2>')
  })

})()
