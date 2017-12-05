function Notes() {
  this._notes = []
}

Notes.prototype.getNotes = function() {
  return this._notes
}

Notes.prototype.addNote = function(note) {
  this._notes.push(note)
}

Notes.prototype.getLast = function(note) {
  return this.getNotes().slice(-1)[0]
}
