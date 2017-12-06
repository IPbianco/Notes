"use strict";

(function(exports) {

  function FakeNote(text) {
    this._text = text;
    this._MAX_SUMMARY_LENGTH = 20;
    this.setSumary(text);
  }

  FakeNote.prototype.setSumary = function(text) {
    this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
  }

  FakeNote.prototype.getSummary = function () {
    return this._summary;
  }

  function FakeNoteList() {
    this._notes = []
  }

  FakeNoteList.prototype.getNotes = function() {
    return this._notes
  }

  FakeNoteList.prototype.addNote = function(text, constructor = FakeNote) {
    this._notes.push(new constructor(text))
  }

  function testNoteListViewInstanceOf() {
    var noteListView = new NoteListView()
    return assert.isTrue(noteListView instanceof NoteListView)
  }

  function testNoteListViewhasNotes() {
    var fakeNoteList,
        noteListView;

    fakeNoteList = new FakeNoteList()
    fakeNoteList.addNote("Testing", FakeNote)
    noteListView = new NoteListView(fakeNoteList)
    return assert.called(noteListView.getListHTML(), "<ul><li>Testing</li></ul>")
  }

  exports.testNoteListViewInstanceOf = testNoteListViewInstanceOf
  exports.testNoteListViewhasNotes = testNoteListViewhasNotes

})(this)
