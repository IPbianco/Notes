"use strict";

var notes = new NoteList();
var headerView = new HeaderView();
var content;
var createButton;
var newNote;
var linksList;
var links;
var noteText;

window.addEventListener("load", function() {

  content = document.getElementById("content");
  content.innerHTML = headerView.getHeaderHTML()

  createButton = document.getElementById("create");
  newNote = document.getElementById("new-note");
  linksList = document.getElementById("links-list");
  links = document.getElementsByTagName("a");
  noteText = document.getElementById("current-note");

  createButton.addEventListener("click", function() {
    createNote();
    loadLinks();
    addListeners(links);
  });
});

function createNote() {
  notes.addNote(newNote.value);
  resetNewNote()
}

function resetNewNote() {
  newNote.value = ""
}

function loadLinks() {
  var noteListView = new NoteListView(notes);
  linksList.innerHTML = noteListView.getListHTML() ;
}

function addListeners(links) {
    for(let i=0; i < links.length; i++) {
        links[i].addEventListener("click",
            function() {
                renderNote(i);
        });
    };
}

function renderNote(i) {
  var noteView = new NoteView(notes.getNotes()[i])
  noteText.innerHTML = `${noteView.getNoteHTML()}`;
}
