"use strict";

function Note(text) {
 	this._text = text;
 	this.setSumary(text);
}

Note.prototype.setSumary = function(text) {
	this._summary = (text.length < MAX_SUMMARY_LENGTH) ? text : text.substr(0, MAX_SUMMARY_LENGTH) + '...';
}

Note.prototype.getText = function () {
	return this._text;
}

Note.prototype.getSummary = function () {
	return this._summary;
}
