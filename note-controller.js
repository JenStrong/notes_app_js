(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    notelist.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.notelist);
  };
  exports.NoteController = NoteController;
})(this);

NoteController.prototype.createInnerHTML = function(elementID) {
  var htmlString = this.noteListView.returnHTML();
  document.getElementById(elementID).innerHTML = htmlString;
};
