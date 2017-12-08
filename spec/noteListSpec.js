"use strict";

(function() {
  function FakeNote(text, id = 0) {
    this._text = text;
    this._id = id
    this._MAX_SUMMARY_LENGTH = 20;
    this.setSummary(text);
  }

  FakeNote.prototype.setSummary = function(text) {
    this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
  }

  FakeNote.prototype.getText = function () {
    return this._text;
  }

  FakeNote.prototype.getNoteId = function () {
    return this._id;
  }

  FakeNote.prototype.getSummary = function () {
    return this._summary;
  }

  runner.register(function testGetNotesReturnsArray() {
    var notes = new NoteList()
    var notesArrayString = JSON.stringify(notes.getNotes())
    return assert.returns(notesArrayString, "[]")
  });

  runner.register(function testGetsLastNote() {
    var notes = new NoteList()
    notes.addNote("Antonio", FakeNote)
    notes.addNote("Ignacio", FakeNote)
    var lastNote = notes.getLast()
    return assert.returns(lastNote.getText(), "Ignacio")
  })

  runner.register(function testAddsNoteToArray() {
    var notes = new NoteList()
    notes.addNote("Antonio", FakeNote)
    return assert.returns(notes.getNotes().length, 1)
  })

  runner.register(function testAddsNoteToArrayIncreasesID() {
    var notes = new NoteList()
    notes.addNote("Antonio", FakeNote)
    return assert.returns(notes.getLast().getNoteId(), 1)
  })

})()
