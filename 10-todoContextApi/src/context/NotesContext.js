import {createContext, useContext} from 'react'

export const NotesContext = createContext({
    notes: [
        {
        id: '1',
        note: 'This is the first note',
        completed: false
        }
    ],
    noteAdd: () => {},
    noteUpdate: () => {},
    noteDelete: () => {},
    noteToggle: () => {}
});

export const NotesContextProvider =  NotesContext.Provider;

export const useNotes = () => {
    return useContext(NotesContext);
}
