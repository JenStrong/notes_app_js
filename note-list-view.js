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
    this.noteHTML.push('<li><div><a href=" ">'  + (this.noteList['noteArray'][i]['text']).slice(0,20) + "</a></div></li>");
  }
  this.noteHTML.push("</ul>");
  return this.noteHTML.join("");
};


NoteListView.prototype.makeNotesClickable = function () {
  document
  for(var i = 0; i < this.noteList['noteArray'].length; i++) {
    this.getElementById(this.noteList['noteArray'][i]['id']);
    this.addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
    });
  }
};
// <a href="" id="tiger-link">
