function testGetNotesReturnsArray() {
  var notes = new Notes()
  var notesArrayString = JSON.stringify(notes.getNotes())
  return assert.returns(notesArrayString, "[]")
}

function testAddsNoteToArray() {
  var notes = new Notes()
  var note = "Antonio"
  notes.addNote(note)
  var notesArrayString = JSON.stringify(notes.getNotes())
  var comparisonArrayString = JSON.stringify(["Antonio"])
  return assert.returns(notesArrayString, comparisonArrayString)
}

function testGetsLastNote() {
  var notes = new Notes()
  var note1 = "Antonio"
  var note2 = "Ignacio"
  notes.addNote(note1)
  notes.addNote(note2)
  var lastNote = notes.getLast()
  return assert.returns(lastNote, "Ignacio")
}
