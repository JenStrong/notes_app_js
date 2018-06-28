(function(exports) {
  function testNoteController() {
    function NoteListDouble() {};
    NoteListDouble.prototype = {
      addNote: function() {}
    }
    var notelistdouble = new NoteListDouble;
    var notecontroller = new NoteController(notelistdouble);
    notecontroller.noteListView.returnHTML = function () {
      return "<ul><li><div>Test</div></li></ul>";
    }
    notecontroller.createInnerHTML('app');
    assert.isTrue(app.innerHTML === "<ul><li><div>Test</div></li></ul>")
  }
  testNoteController();
})(this);
