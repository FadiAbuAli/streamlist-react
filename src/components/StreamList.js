import { useState } from "react";
import "./StreamList.css"; // Optional for extra styling

function StreamList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setItems([...items, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(items[index].text);
  };

  const handleEditSubmit = (index) => {
    const newItems = [...items];
    newItems[index].text = editText;
    setItems(newItems);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="streamlist-container">
      <h2>StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie or show"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSubmit(index)}>
                  <span className="material-icons">check</span>
                </button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(index)}>{item.text}</span>
                <button onClick={() => startEditing(index)}>
                  <span className="material-icons">edit</span>
                </button>
                <button onClick={() => handleDelete(index)}>
                  <span className="material-icons">delete</span>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
