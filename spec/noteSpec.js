'use strict';

(function(exports) {
  function testNoteInstanceOfNote() {
    var note = new Note("Ignacio");
    return assert.isTrue(note instanceof Note);
  };

  function testGetTextReturnsTextProperty() {
    var note = new Note("Ignacio");
    return assert.returns(note.getText(), "Ignacio");
  }

  function testGetSummaryReturnsSummaryProperty() {
    var note = new Note("Ignacio is the best at table tennis");
    return assert.returns(note.getSummary(), "Ignacio is the best ...");
  }

  function testGetNoteId() {
    var note = new Note("Ignacio is the best at table tennis");
    return assert.returns(note.getNoteId(), 0);
  }

  exports.testNoteInstanceOfNote = testNoteInstanceOfNote
  exports.testGetTextReturnsTextProperty = testGetTextReturnsTextProperty
  exports.testGetSummaryReturnsSummaryProperty = testGetSummaryReturnsSummaryProperty
  exports.testGetNoteId = testGetNoteId

})(this);
