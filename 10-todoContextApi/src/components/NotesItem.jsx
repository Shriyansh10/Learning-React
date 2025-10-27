import React, { useState } from "react";
import { useNotes } from "../context";

function NotesItem({ note }) {
  const { noteUpdate, noteToggle, noteDelete } = useNotes();
  const [noteEditable, setNoteEditable] = useState(false);
  const [noteMsg, setNoteMSG] = useState(note.message);

  function handleEdit() {
    if (noteMsg === "") window.alert("Enter Something");
    else {
      noteUpdate(note.id, { ...note, message: noteMsg });
      setNoteEditable((prev) => !prev);
    }
  }

  function handleDelete() {
    noteDelete(note.id);
  }

  function handleToggle() {
    noteToggle(note.id);
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        note.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={note.completed}
        onChange={handleToggle} //noteToggle(note) runs an infiniteloop
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          noteEditable ? "border-black/10 px-2" : "border-transparent"
        } ${note.completed ? "line-through" : ""}`}
        value={noteMsg}
        onChange={(e) => setNoteMSG(e.target.value)}
        readOnly={!noteEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (note.completed) return;

          if (noteEditable) {
            handleEdit();
          } else {
            return setNoteEditable((prev) => !prev);
          }
        }}
        disabled={note.completed}
      >
        {noteEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
}

export default NotesItem;
