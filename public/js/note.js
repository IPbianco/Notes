"use strict";

(function(exports) {
  function Note(text, id = 0) {
   	this._text = text;
    this._id = id
    this._MAX_SUMMARY_LENGTH = 20;
   	this.setSummary(text);
  }

  Note.prototype.setSummary = function(text) {
  	this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
  }

  Note.prototype.getText = function () {
  	return this._text;
  }

  Note.prototype.getSummary = function () {
  	return this._summary;
  }

  Note.prototype.getNoteId = function () {
    return this._id;
  }

  exports.Note = Note
})(this)
