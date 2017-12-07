"use strict";

(function(exports) {

  function FakeNote(text, id = 0) {
    this._text = text;
    this._id = id
    this._MAX_SUMMARY_LENGTH = 20;
    this.setSumary(text);
  }

  FakeNote.prototype.setSumary = function(text) {
    this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
  }

  FakeNote.prototype.getSummary = function () {
    return this._summary;
  }

  FakeNote.prototype.getNoteId = function () {
    return this._id;
  }

  function FakeNoteList() {
    this._notes = []
    this._counter = 1
  }

  FakeNoteList.prototype.getNotes = function() {
    return this._notes
  }

  FakeNoteList.prototype.addNote = function(text, constructor = Note) {
    this._notes.push(new constructor(text, this._counter))
    this._counter ++
  }

  function testNoteListViewInstanceOf() {
    var noteListView = new NoteListView()
    return assert.isTrue(noteListView instanceof NoteListView)
  }

  function testGetListHTML1Note() {
    var fakeNoteList,
        noteListView;

    fakeNoteList = new FakeNoteList()
    fakeNoteList.addNote("Testing", FakeNote)
    noteListView = new NoteListView(fakeNoteList)
    return assert.returns(noteListView.getListHTML(), "<ul><li><a href=#1>Testing</a></li></ul>")
  }

  function testGetListHTML2Notes() {
    var fakeNoteList,
        noteListView;

    fakeNoteList = new FakeNoteList()
    fakeNoteList.addNote("Testing", FakeNote)
    fakeNoteList.addNote("Testing", FakeNote)
    noteListView = new NoteListView(fakeNoteList)
    return assert.returns(noteListView.getListHTML(), "<ul><li><a href=#1>Testing</a></li><li><a href=#2>Testing</a></li></ul>")
  }

  exports.testNoteListViewInstanceOf = testNoteListViewInstanceOf
  exports.testGetListHTML1Note = testGetListHTML1Note
  exports.testGetListHTML2Notes = testGetListHTML2Notes

})(this)
