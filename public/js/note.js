"use strict";

function Note(text) {
  this._text = text
  this._summary = text.substr(0, 20)
}

Note.prototype.getText = function () {
  return this._text
}

Note.prototype.getSummary = function () {
  return this._summary
}
