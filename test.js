const message = 'Hello world'; // Try edit me

// Update header text
document.querySelector('h1').innerHTML = message;

const notes = [
  {
    id: 1,
    message: 'First',
    completed: false,
  },
  {
    id: 2,
    message: 'Second',
    completed: false,
  },
  {
    id: 3,
    message: 'Third',
    completed: false,
  },
];

const note = {id: Date.now(), message: 'New Note', completed: false}
const note2 = {id: Date.now(), message: '2 Note', completed: false}

const updatednotes = [{id: Date.now(), ...note}, ...notes]
console.log(updatednotes)

// const notetobedeleted = notes.filter(note => Number(note.id) !== 3);
// console.log(notetobedeleted)

const finalnotes = (id, note) =>{
    return updatednotes.map((prevnote) => prevnote.id === id ? note: prevnote)
}

console.log(finalnotes(3, note2))

// // Log to console
// console.log(`final output`);
// console.log(...notes);

localStorage.setItem("notes" , JSON.stringify(notes));
if(localStorage.getItem('notes') === null) console.log(true);
else {
  console.log(JSON.parse(localStorage.getItem('notes')))
}