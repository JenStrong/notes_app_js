(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
    this.noteHTML = [];
  };

  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.returnHTML = function () {
  this.noteHTML.push("<ul>");
  for(var i = 0; i < this.noteList['noteArray'].length; i++) {
    this.noteHTML.push("<li><div>" + (this.noteList['noteArray'][i]['text']).slice(0,20) + "</div></li>");
  }
  this.noteHTML.push("</ul>");
  return this.noteHTML.join("");
};
