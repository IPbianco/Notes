"use strict";

window.addEventListener("load", function() {
    var createButton
    var notes = []
    var linksList
    var content
    var newNote
    var noteText
    var links

    content = document.getElementById("content")

    content.innerHTML = '<h1>Notes</h1>' +
                        '<input type="text" id="new-note" placeholder="Enter new note">' +
                        '<button type="button" id="create">Create</button>' +
                        '<div id="links">'+
                            '<ul id="links-list">'+
                            '</ul>'+
                        '</div>'+
                        '<h2>Note</h2>'+
                        '<div id="current-note">'+
                        '</div>'

    createButton = document.getElementById("create")
    linksList = document.getElementById("links-list")

    createButton.addEventListener("click", function() {
        createNote();
        loadLinks();
    })
})
