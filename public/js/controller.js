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

    _setupButtonToShowNotes: function(doc = document, createButtonId = "create", newNoteId = "new-note", linksListId = "links-list", NoteListViewConstructor = NoteListView) {

      var createButton = doc.getElementById(createButtonId);
      var newNote = doc.getElementById(newNoteId);
      var linksList = doc.getElementById(linksListId);
      var self = this

      createButton.addEventListener("click", function() {
        _createNote();
        _loadLinks(NoteListViewConstructor);
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
    },

    _setupLinkToShowNote: function(doc = document, currentNoteId = "current-note", NoteViewConstructor = NoteView, page = window) {

      var self = this
      var noteText = doc.getElementById(currentNoteId);

      page.addEventListener("hashchange", function() {
        _renderNote(NoteViewConstructor, page);
      });

      function _renderNote(NoteViewConstructor, page) {
        var noteView = new NoteViewConstructor(self.getNoteList().getNotes()[(_getIdFromUrl(page.location))-1])
        noteText.innerHTML = `${noteView.getNoteHTML()}`;
      }

      function _getIdFromUrl(location) {
        return parseInt(location.hash.split("#")[1])
      }
    }
  }

  exports.Controller = Controller

})(this)
