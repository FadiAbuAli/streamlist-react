import React, { useEffect, useState } from "react";
import "./StreamList.css";

function StreamList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("streamList");
      const parsed = saved ? JSON.parse(saved) : [];
      setItems(parsed);
    } catch (error) {
      console.error("Failed to load StreamList:", error);
      setItems([]);
    }
  }, []);

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("streamList", JSON.stringify(updated));
  };

  return (
    <div className="streamlist-container">
      <h2>My Streaming List</h2>
      {items.length === 0 ? (
        <p>Your list is empty. Search for a movie and add it to your StreamList!</p>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="streamlist-item">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={item.title}
              />
              <div className="streamlist-info">
                <h3>{item.title}</h3>
                <p>{item.overview || "No description available."}</p>
                <button onClick={() => handleDelete(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StreamList;
