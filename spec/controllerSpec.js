"use strict";

(function(exports) {
  var click
  var showNote
  var countAddNote = 0
  var fakeButton = { addEventListener: function(_, callback) {click = callback } }
  var fakeNewNote = { value: null }
  var fakeLinksList = { innerHTML: null }
  var fakeNoteText = { innerHTML: null }
  var fakeLocation = { hash: "index.html#1" }
  var fakeWindow = { location: fakeLocation, addEventListener: function(_, callback) {showNote = callback} }
  var fakeDocument = { getElementById: function(arg) {
                        switch (arg) {
                          case "create":
                            return fakeButton
                            break;
                          case "new-note":
                            return fakeNewNote
                            break;
                          case "links-list":
                            return fakeLinksList
                            break;
                          case "current-note":
                            return fakeNoteText
                        }
                      },
                      getElementsByTagName: function() {
                        return fakeLinks
                      }
                    }

  var fakeContentDiv = { innerHTML: null }
  var fakeHeaderView = { getHeaderHTML: function() { return "Header" } }
  var fakeNote1 = { text: "Fake note 1" }
  var fakeNote2 = { text: "Fake note 2" }
  var fakeNotes = [fakeNote1, fakeNote2]
  var fakeNoteList = { addNote: function() { countAddNote++ }, getNotes: function() { return fakeNotes } }
  var controller = new Controller(fakeContentDiv, fakeNoteList, fakeHeaderView)

  function FakeNoteListView() {
    FakeNoteListView.prototype.getListHTML = function() { return "List of links" }
  }

  function FakeNoteView(note) {
    this._note = note
    FakeNoteView.prototype.getNoteHTML = function() {return this._note.text }
  }

  controller._setMainView()
  controller._setupButtonToShowNotes(fakeDocument, "create", "new-note", "links-list", FakeNoteListView)
  click()
  controller._setupLinkToShowNote(fakeDocument, "current-note", FakeNoteView, fakeWindow)


  function testControllerGetContentDiv() {
    return assert.returns(controller.getContentDiv(), fakeContentDiv)
  }

  function testControllerGetHeaderView() {
    return assert.returns(controller.getHeaderView(), fakeHeaderView)
  }

  function testControllerGetNoteList() {
    return assert.returns(controller.getNoteList(), fakeNoteList)
  }

  function testControllerSetMainView() {
    return assert.returns(controller.getContentDiv().innerHTML, "Header")
  }

  function testControllerSetupButtonToShowNotesCreateNoteAddNote() {
    return assert.isTrue(countAddNote === 1)
  }

  function testControllerSetupButtonToShowNotesCreateNoteResetNote() {
    return assert.isTrue(fakeNewNote.value === "")
  }

  function testControllerSetupButtonToShowNotesLoadLinks() {
    return assert.returns(fakeLinksList.innerHTML, "List of links")
  }

  function testControllerSetupLinkToShowNote() {
    showNote()
    return assert.returns(fakeNoteText.innerHTML, "Fake note 1")
  }

  exports.testControllerGetContentDiv = testControllerGetContentDiv
  exports.testControllerGetHeaderView = testControllerGetHeaderView
  exports.testControllerGetNoteList = testControllerGetNoteList
  exports.testControllerSetMainView = testControllerSetMainView
  exports.testControllerSetupButtonToShowNotesCreateNoteAddNote = testControllerSetupButtonToShowNotesCreateNoteAddNote
  exports.testControllerSetupButtonToShowNotesCreateNoteResetNote = testControllerSetupButtonToShowNotesCreateNoteResetNote
  exports.testControllerSetupButtonToShowNotesLoadLinks = testControllerSetupButtonToShowNotesLoadLinks
  exports.testControllerSetupLinkToShowNote = testControllerSetupLinkToShowNote

})(this)
