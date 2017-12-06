"use strict";

(function(exports) {
  function Controller(contentDiv, noteList, headerView) {
    this._contentDiv = contentDiv
    this._noteList = noteList
    this._headerView = headerView

    this._setMainView()
    this._setupButtonToShowNotes()
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

    _setupButtonToShowNotes: function() {

      var createButton = document.getElementById("create");
      var newNote = document.getElementById("new-note");
      var linksList = document.getElementById("links-list");
      var links = document.getElementsByTagName("a");
      var noteText = document.getElementById("current-note");
      var self = this

      createButton.addEventListener("click", function() {
        _createNote();
        _loadLinks();
        _addListeners(links);
      })

      function _createNote() {
        self.getNoteList().addNote(newNote.value);
        _resetNewNote()
      }

      function _resetNewNote() {
        newNote.value = ""
      }

      function _loadLinks() {
        var noteListView = new NoteListView(self.getNoteList());
        linksList.innerHTML = noteListView.getListHTML() ;
      }

      function _addListeners(links) {
          for(let i=0; i < links.length; i++) {
              links[i].addEventListener("click",
                  function() {
                      _renderNote(i);
              });
          };
      }

      function _renderNote(i) {
        var noteView = new NoteView(self.getNoteList().getNotes()[i])
        noteText.innerHTML = `${noteView.getNoteHTML()}`;
      }
    }
  }

  exports.Controller = Controller

})(this)
