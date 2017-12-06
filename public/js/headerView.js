"use strict";

(function(exports) {
  function HeaderView() {

  }

  HeaderView.prototype.getHeaderHTML = function() {
    return '<h1>Notes</h1>' +
            '<input type="text" id="new-note" placeholder="Enter new note">' +
            '<button type="button" id="create">Create</button>' +
            '<div id="links">'+
                '<ul id="links-list">'+
                '</ul>'+
            '</div>'+
            '<h2>Note</h2>'+
            '<div id="current-note">'+
            '</div>';
  }

  exports.HeaderView = HeaderView
})(this)
