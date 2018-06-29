(function(exports) {
  function Note(text,noteid) {
    this.text = text;
    this.noteid = noteid
  };

  exports.Note = Note;
})(this);

Note.prototype.returnNoteText = function () {
  return this.text;
};

Note.prototype.returnNoteId = function () {
  return this.noteid; 
};
