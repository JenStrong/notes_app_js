(function(exports) {
  function SingleNoteView(note){
    this.note = note;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

SingleNoteView.prototype.returnNoteHTML = function () {
  var noteText = this.note.returnNoteText();
  return "<div>" + noteText + "</div>"
};
