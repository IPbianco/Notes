"use strict";

(function(exports) {
  var click
  var clickLink
  var countAddNote = 0
  var fakeButton = { addEventListener: function(_, callback) {click = callback } }
  var fakeNewNote = { value: null }
  var fakeLinksList = { innerHTML: null }
  var fakeNoteText = { innerHTML: null }
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
                            return fakeNoteText
                        }
                      },
                      getElementsByTagName: function() {
                        return fakeLinks
                      }
                    }

  var fakeContentDiv = { innerHTML: null }
  var fakeNote
  var fakeHeaderView = { getHeaderHTML: function() { return "Header" } }
  var fakeNoteList = { addNote: function() { countAddNote++ }, getNotes: function() { return [fakeNote] } }
  var controller = new Controller(fakeContentDiv, fakeNoteList, fakeHeaderView)

  function FakeNoteListView() {
    FakeNoteListView.prototype.getListHTML = function() { return "List of links" }
  }

  function FakeNoteView() {
    FakeNoteView.prototype.getNoteHTML = function() {return "Note text"}
  }

  controller._setMainView()
  controller._setupButtonToShowNotes(fakeDocument, "create", "new-note", "links-list", "a", "current-note", FakeNoteListView, FakeNoteView)
  click()


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

  function testControllerSetupButtonToShowNotesAddListeners() {
    clickLink()
    return assert.returns(fakeNoteText.innerHTML, "Note text")
  }


  exports.testControllerGetContentDiv = testControllerGetContentDiv
  exports.testControllerGetHeaderView = testControllerGetHeaderView
  exports.testControllerGetNoteList = testControllerGetNoteList
  exports.testControllerSetMainView = testControllerSetMainView
  exports.testControllerSetupButtonToShowNotesCreateNoteAddNote = testControllerSetupButtonToShowNotesCreateNoteAddNote
  exports.testControllerSetupButtonToShowNotesCreateNoteResetNote = testControllerSetupButtonToShowNotesCreateNoteResetNote
  exports.testControllerSetupButtonToShowNotesLoadLinks = testControllerSetupButtonToShowNotesLoadLinks
  exports.testControllerSetupButtonToShowNotesAddListeners = testControllerSetupButtonToShowNotesAddListeners

})(this)
