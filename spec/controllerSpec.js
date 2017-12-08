"use strict";

(function() {
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

  runner.register(function testControllerGetContentDiv() {
    return assert.returns(controller.getContentDiv(), fakeContentDiv)
  })

  runner.register(function testControllerGetHeaderView() {
    return assert.returns(controller.getHeaderView(), fakeHeaderView)
  })

  runner.register(function testControllerGetNoteList() {
    return assert.returns(controller.getNoteList(), fakeNoteList)
  })

  runner.register(function testControllerSetMainView() {
    return assert.returns(controller.getContentDiv().innerHTML, "Header")
  })

  runner.register(function testControllerSetupButtonToShowNotesCreateNoteAddNote() {
    return assert.isTrue(countAddNote === 1)
  })

  runner.register(function testControllerSetupButtonToShowNotesCreateNoteResetNote() {
    return assert.isTrue(fakeNewNote.value === "")
  })

  runner.register(function testControllerSetupButtonToShowNotesLoadLinks() {
    return assert.returns(fakeLinksList.innerHTML, "List of links")
  })

  runner.register(function testControllerSetupLinkToShowNote() {
    showNote()
    return assert.returns(fakeNoteText.innerHTML, "Fake note 1")
  })

})()
