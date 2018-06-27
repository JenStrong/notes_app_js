(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.noteListView = new NoteListView(this.notelist);
  };
  exports.NoteController = NoteController;
})(this);

NoteController.prototype.returnInnerHTML = function () {
  var htmlString = this.noteListView.returnHTML();
  document.getElementById('app').innerHTML = htmlString;
};
