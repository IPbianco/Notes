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
