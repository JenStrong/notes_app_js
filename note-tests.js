function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteText();


function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript");
  assert.isTrue(noteList.noteArray[0].returnNoteText() === "My favourite language is JavaScript");
};

testNoteList();

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("First note");
  noteList.addNote("Second note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>");
};

testNoteListView();


function testNoteController() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.addNote("Favourite food: pesto");
  var noteController = new NoteController(noteList);
  noteController.returnInnerHTML();
  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>")
};

testNoteController();
