"use strict";

(function(exports) {

  function Controller(contentDiv, noteList, headerView) {
    this._contentDiv = contentDiv
    this._noteList = noteList
    this._headerView = headerView
  }

  Controller.prototype = {

    getContentDiv: function() {
      return this._contentDiv
    },

    getNoteList: function() {
      return this._noteList
    },

    getHeaderView: function() {
      return this._headerView
    },

    _setMainView: function() {
      this.getContentDiv().innerHTML = this.getHeaderView().getHeaderHTML()
    },

    _setupButtonToShowNotes: function(doc = document, createButtonId = "create", newNoteId = "new-note", linksListId = "links-list", linksTag = "a", currentNoteId = "current-note", NoteListViewConstructor = NoteListView, NoteViewConstructor = NoteView) {

      var createButton = doc.getElementById(createButtonId);
      var newNote = doc.getElementById(newNoteId);
      var linksList = doc.getElementById(linksListId);
      var noteText = doc.getElementById(currentNoteId);
      var self = this

      createButton.addEventListener("click", function() {
        _createNote();
        _loadLinks(NoteListViewConstructor);
        _addListeners(NoteViewConstructor);
      })

      function _createNote() {
        self.getNoteList().addNote(newNote.value);
        _resetNewNote()
      }

      function _resetNewNote() {
        newNote.value = ""
      }

      function _loadLinks(NoteListViewConstructor) {
        var noteListView = new NoteListViewConstructor(self.getNoteList());
        linksList.innerHTML = noteListView.getListHTML() ;
      }

      function _addListeners(NoteViewConstructor) {
        console.log(8)
        window.addEventListener("hashchange", function() {
          console.log(9)
          _renderNote(NoteViewConstructor);
        });
      }

      function _renderNote(NoteViewConstructor) {
        console.log(_getIdFromUrl(window.location))
        var noteView = new NoteViewConstructor(self.getNoteList().getNotes()[_getIdFromUrl(window.location) + 1])
        noteText.innerHTML = `${noteView.getNoteHTML()}`;
      }

      function _getIdFromUrl(location) {
        return location.hash.split("#")[1]
      }
    }
  }

  exports.Controller = Controller

})(this)
