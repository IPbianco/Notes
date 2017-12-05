function testgetHeaderHTML() {
  var interfaceView = new InterfaceView()
  return assert.returns(interfaceView.getHeaderHTML(),
    '<h1>Notes</h1>' +
    '<input type="text" id="new-note" placeholder="Enter new note">' +
    '<button type="button" id="create">Create</button>' +
    '<div id="links">'+
        '<ul id="links-list">'+
        '</ul>'+
    '</div>'+
    '<h2>Note</h2>'+
    '<div id="current-note">'+
    '</div>'
  )
}
