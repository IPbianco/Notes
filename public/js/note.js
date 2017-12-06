"use strict";

(function(exports) {
  function Note(text) {
   	this._text = text;
    this._MAX_SUMMARY_LENGTH = 20;
   	this.setSumary(text);
  }

  Note.prototype.setSumary = function(text) {
  	this._summary = (text.length < this._MAX_SUMMARY_LENGTH) ? text : text.substr(0, this._MAX_SUMMARY_LENGTH) + '...';
  }

  Note.prototype.getText = function () {
  	return this._text;
  }

  Note.prototype.getSummary = function () {
  	return this._summary;
  }

  exports.Note = Note
})(this)
