function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteText();


function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript",1);
  assert.isTrue(noteList.noteArray[0].returnNoteText() === "My favourite language is JavaScript");
  assert.isTrue(noteList.noteArray[0].returnNoteId() === 0); 
};

testNoteList();

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("First note: My favourite food is pesto");
  noteList.addNote("Second note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML().includes('<ul><li><div>First note: My favou</div></li><li><div>Second note</div></li></ul>'));
};

  testNoteListView();

function testNoteController() {
  function NoteListDouble() {};
  NoteListDouble.prototype = {
    addNote: function() {}
  }
  var notelistdouble = new NoteListDouble;
  var notecontroller = new NoteController(notelistdouble);
  notecontroller.noteListView.returnHTML = function () {
    return "<ul><li><div>Favourite food: pesto</div></li></ul>";
  }
  notecontroller.createInnerHTML('app');
  assert.isTrue(app.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>")
};

  testNoteController();

  function testSingleNoteView(){
    function NoteDouble(text) {};
    NoteDouble.prototype = {
      returnNoteText: function() {}
    }

    var notedouble = new NoteDouble("Favorite drink: seltzer")
    var singleNoteView = new SingleNoteView(notedouble);
    singleNoteView.note.returnNoteText = function (){
      return "Favorite drink: seltzer";
    }
    assert.isTrue(singleNoteView.returnNoteHTML() === "<div>Favorite drink: seltzer</div>");
  };

  testSingleNoteView();
