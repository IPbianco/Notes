function createNote() {
    newNote = document.getElementById("new-note")
    notes.push(new Note(newNote.value))
    resetInput(newNote);
    createNoteLink();
}

function resetInput(input) {
    input.value = "";
}
