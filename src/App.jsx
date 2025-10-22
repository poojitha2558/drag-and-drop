import {useState} from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hii",
      isChecked: false,
    },
    {
      id: 2,
      text: "Hello",
      isChecked: false,
    },
  ]);

  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, {id: notes.length + 1, text: note, isChecked: false}]);
      setNote("");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNote();
            }
          }}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;