import { NotesForm, NotesItem } from "./components";
import { NotesContext, NotesContextProvider } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const noteAdd = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev]);
  };

  const noteDelete = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    console.log(notes);
  };

  const noteToggle = (id) => {
    setNotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id
          ? { ...prevNote, completed: !prevNote.completed }
          : prevNote
      )
    );
  };

  const noteUpdate = (id, note) => {
    setNotes((prev) =>
      prev.map((prevNote) => (prevNote.id === id ? note : prevNote))
    );
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes && notes.length > 0) {
      setNotes(notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <NotesContextProvider
        value={{ notes, noteAdd, noteDelete, noteToggle, noteUpdate }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{<NotesForm />}</div>
            <div className="flex flex-wrap gap-y-3">
              {notes &&
                notes.map((note) => (
                  <div className="w-full" key={note.id}>
                    <NotesItem note={note} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </NotesContextProvider>
    </>
  );
}

export default App;
