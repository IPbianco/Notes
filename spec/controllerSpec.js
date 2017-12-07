"use strict";

(function(exports) {
  var click
  var clickLink
  var countAddNote = 0
  var fakeButton = { addEventListener: function(_, callback) {click = callback } }
  var fakeNewNote = { value: null }
  var fakeLinksList = { innerHTML: null }
  var fakeCurrentNote
  var fakeLink = { addEventListener: function(_, callback) {clickLink = callback} }
  var fakeLinks = [fakeLink]

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
                            return fakeCurrentNote
                        }
                      },
                      getElementsByTagName: function() {
                        return fakeLinks
                      }
                    }

  var fakeContentDiv = { innerHTML: null }
  var fakeHeaderView = { getHeaderHTML: function() { return "Header" } }
  var fakeNoteList = { addNote: function() { countAddNote++ } }
  var controller = new Controller(fakeContentDiv, fakeNoteList, fakeHeaderView)

  function FakeNoteListView() {
    FakeNoteListView.prototype.getListHTML = function() { return "List of links" }
  }

  function FakeNoteView() {
  }

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
    controller._setMainView()
    return assert.returns(controller.getContentDiv().innerHTML, "Header")
  }

  function testControllerSetupButtonToShowNotesCreateNoteAddNote() {
    controller._setupButtonToShowNotes(fakeDocument, "create", "new-note", "links-list", "a", "current-note", FakeNoteListView, FakeNoteView)
    click()
    return assert.isTrue(countAddNote === 1)
  }

  function testControllerSetupButtonToShowNotesCreateNoteResetNote() {
    fakeNewNote.value = null
    controller._setupButtonToShowNotes(fakeDocument, "create", "new-note", "links-list", "a", "current-note", FakeNoteListView, FakeNoteView)
    click()
    return assert.isTrue(fakeNewNote.value === "")
  }

  exports.testControllerGetContentDiv = testControllerGetContentDiv
  exports.testControllerGetHeaderView = testControllerGetHeaderView
  exports.testControllerGetNoteList = testControllerGetNoteList
  exports.testControllerSetMainView = testControllerSetMainView
  exports.testControllerSetupButtonToShowNotesCreateNoteAddNote = testControllerSetupButtonToShowNotesCreateNoteAddNote
  exports.testControllerSetupButtonToShowNotesCreateNoteResetNote = testControllerSetupButtonToShowNotesCreateNoteResetNote

})(this)
