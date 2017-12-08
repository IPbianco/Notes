'use strict';

(function() {
  runner.register(function testNoteInstanceOfNote() {
    var note = new Note("Ignacio");
    return assert.isTrue(note instanceof Note);
  });

  runner.register(function testGetTextReturnsTextProperty() {
    var note = new Note("Ignacio");
    return assert.returns(note.getText(), "Ignacio");
  })

  runner.register(function testGetSummaryReturnsSummaryProperty() {
    var note = new Note("Ignacio is the best at table tennis");
    return assert.returns(note.getSummary(), "Ignacio is the best ...");
  })

  runner.register(function testGetNoteId() {
    var note = new Note("Ignacio is the best at table tennis");
    return assert.returns(note.getNoteId(), 0);
  })

})();
