import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first Notes!",
      date: "8/05/2023",
    },
    {
      id: nanoid(),
      text: "This is the second Notes!",
      date: "9/05/2023",
    },
    {
      id: nanoid(),
      text: "This is the third Notes!",
      date: "10/05/2023",
    },
    {
      id: nanoid(),
      text: "This is the new Notes!",
      date: "11/05/2023",
    },
  ]);

  const [searchTeaxt, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes-app-data");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes) ?? []);
    }
  }, []);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("notes-app-data", JSON.stringify(newNotes));
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes-app-data", JSON.stringify(newNotes));
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchTeaxt)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
