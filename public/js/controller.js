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

    _setupButtonToShowNotes: function(doc = document, createButtonId = "create", newNoteId = "new-note", linksListId = " links-list", linksTag = "a", currentNoteId = "current-note", NoteListViewConstructor = NoteListView, NoteViewConstructor = NoteView) {

      var createButton = doc.getElementById(createButtonId);
      var newNote = doc.getElementById(newNoteId);
      var linksList = doc.getElementById(linksListId);
      var links = doc.getElementsByTagName(linksTag);
      var noteText = doc.getElementById(currentNoteId);
      var self = this

      createButton.addEventListener("click", function() {
        _createNote();
        _loadLinks(NoteListViewConstructor);
        _addListeners(links, NoteViewConstructor);
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

      function _addListeners(links, NoteViewConstructor) {
        for(let i=0; i < links.length; i++) {
          links[i].addEventListener("click", function() {
            _renderNote(i, NoteViewConstructor);
          });
        };
      }

      function _renderNote(i, NoteViewConstructor) {
        var noteView = new NoteViewConstructor(self.getNoteList().getNotes()[i])
        noteText.innerHTML = `${noteView.getNoteHTML()}`;
      }
    }
  }

  exports.Controller = Controller

})(this)
