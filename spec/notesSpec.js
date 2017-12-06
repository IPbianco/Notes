
function FakeNote(text) {
  this._text = text;
  this._MAX_SUMMARY_LENGTH = 20;
  this.setSumary(text);
}

FakeNote.prototype.setSumary = function(text) {
  this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
}

FakeNote.prototype.getText = function () {
  return this._text;
}

FakeNote.prototype.getSummary = function () {
  return this._summary;
}

function testGetNotesReturnsArray() {
  var notes = new Notes()
  var notesArrayString = JSON.stringify(notes.getNotes())
  return assert.returns(notesArrayString, "[]")
}

function testAddsNoteToArray() {
  var notes = new Notes()
  notes.addNote("Antonio", FakeNote)
  return assert.returns(notes.getNotes().length, 1)
}

function testGetsLastNote() {
  var notes = new Notes()
  notes.addNote("Antonio", FakeNote)
  notes.addNote("Ignacio", FakeNote)
  var lastNote = notes.getLast()
  return assert.returns(lastNote.getText(), "Ignacio")
}
