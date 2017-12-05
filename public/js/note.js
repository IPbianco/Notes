"use strict";

function Note(text) {
  this._text = text
  this.setSumary(text);
}

Note.prototype.setSumary = function(text) {
  if(text.length < 20) {
    this._summary = text
  } else {
    this._summary = text.substr(0, 20) + '...'
  }
}

Note.prototype.getText = function () {
  return this._text
}

Note.prototype.getSummary = function () {
  return this._summary
}
