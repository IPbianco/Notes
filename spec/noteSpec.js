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

  exports.testNoteInstanceOfNote = testNoteInstanceOfNote
  exports.testGetTextReturnsTextProperty = testGetTextReturnsTextProperty
  exports.testGetSummaryReturnsSummaryProperty = testGetSummaryReturnsSummaryProperty

})(this);
