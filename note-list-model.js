(function(exports) {

  function NoteList() {
    this.noteArray = [];
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.returnNoteArray = function () {
  return this.noteArray;
};

NoteList.prototype.addNote = function (text) {
  var noteid = this.noteArray.length;

  var note = new Note(text,noteid);
  this.noteArray.push(note);
};
