"use strict";

var createButton;
var notes = new Notes();
var headerView = new headerView();
var linksList;
var content;
var newNote;
var noteText;
var links;

window.addEventListener("load", function() {

  content = document.getElementById("content");
  content.innerHTML = headerView.getHeaderHTML()

  createButton = document.getElementById("create");
  linksList = document.getElementById("links-list");

  createButton.addEventListener("click", function() {
    createNote();
    loadLinks();
  });
});


function loadLinks() {
    links = document.getElementsByTagName("a");
    addListeners(links);
}

function addListeners(anchors) {
    for(let i=0; i < anchors.length; i++) {
        anchors[i].addEventListener("click",
            function() {
                addListener(i);
        });
    };
}

function addListener(index) {
    noteText = document.getElementById("current-note");
    noteText.innerHTML = `${notes[index].getText()}`;
}

function createNote() {
    var newNote = document.getElementById("new-note");
    notes.addNote(new Note(newNote.value));
    newNote.value = "";
    linksList.innerHTML += `<li><a>${notes.getLast().getSummary()}</a></li>`;
}
