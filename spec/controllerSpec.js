"use strict";

(function(exports) {
  var click
  var clickLink1
  var clickLink2
  var countAddNote = 0
  var fakeButton = { addEventListener: function(_, callback) {click = callback } }
  var fakeNewNote = { value: null }
  var fakeLinksList = { innerHTML: null }
  var fakeNoteText = { innerHTML: null }
  var fakeLink1 = { addEventListener: function(_, callback) {clickLink1 = callback}, text: "Link1" }
  var fakeLink2 = { addEventListener: function(_, callback) {clickLink2 = callback}, text: "Link2" }
  var fakeLinks = [fakeLink1, fakeLink2]
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
  var fakeNoteList = { addNote: function() { countAddNote++ }, getNotes: function() { return fakeLinks } }
  var controller = new Controller(fakeContentDiv, fakeNoteList, fakeHeaderView)

  function FakeNoteListView() {
    FakeNoteListView.prototype.getListHTML = function() { return "List of links" }
  }

  function FakeNoteView(link) {
    this._link = link
    FakeNoteView.prototype.getNoteHTML = function() {return this._link.text }
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

  function testControllerSetupButtonToShowNotesAddListenersLink1() {
    clickLink1()
    return assert.returns(fakeNoteText.innerHTML, "Link1")
  }

  function testControllerSetupButtonToShowNotesAddListenersLink2() {
    clickLink2()
    return assert.returns(fakeNoteText.innerHTML, "Link2")
  }

  exports.testControllerGetContentDiv = testControllerGetContentDiv
  exports.testControllerGetHeaderView = testControllerGetHeaderView
  exports.testControllerGetNoteList = testControllerGetNoteList
  exports.testControllerSetMainView = testControllerSetMainView
  exports.testControllerSetupButtonToShowNotesCreateNoteAddNote = testControllerSetupButtonToShowNotesCreateNoteAddNote
  exports.testControllerSetupButtonToShowNotesCreateNoteResetNote = testControllerSetupButtonToShowNotesCreateNoteResetNote
  exports.testControllerSetupButtonToShowNotesLoadLinks = testControllerSetupButtonToShowNotesLoadLinks
  exports.testControllerSetupButtonToShowNotesAddListenersLink1 = testControllerSetupButtonToShowNotesAddListenersLink1
  exports.testControllerSetupButtonToShowNotesAddListenersLink2 = testControllerSetupButtonToShowNotesAddListenersLink2

})(this)
