function createNoteLink() {
	linksList.innerHTML += `<li><a>${notes.slice(-1)[0].getSummary()}</a></li>`;
}

function loadLinks() {
    links = document.getElementsByTagName("a");
    addListeners(links);
}
