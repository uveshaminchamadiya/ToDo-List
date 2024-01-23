import React, { useState } from "react";

export const ToDoList = () => {
  const [inputItem, setInputItem] = useState("");
  const [addedItem, setAddedItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const newItem = (event) => {
    setInputItem(event.target.value);
  };

  const addItem = () => {
    if (editIndex !== null) {
      setAddedItem((oldItem) => {
        const updatedItem = [...oldItem];
        updatedItem[editIndex] = inputItem;
        return updatedItem;
      });
      setEditIndex(null);
    } else {
      setAddedItem((oldItem) => {
        return [...oldItem, inputItem];
      });
    }

    setInputItem("");
  };

  const editItem = (index) => {
    setInputItem(addedItem[index]);
    setEditIndex(index);
  };

  const delItem = (index) => {
    setAddedItem((oldItem) => {
      return oldItem.filter((_, i) => i !== index);
    });
    setEditIndex(null);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="heading">
          <h1>ToDo-List</h1>
        </div>
        <div className="addItem">
          <input
            type="text"
            placeholder="Add/Edit Item"
            onChange={newItem}
            value={inputItem}
          />
          <button onClick={addItem}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <div className="item">
          <ul className="list-group list-group-flush">
            {addedItem.map((itemValue, index) => (
              <li className="list-group-item" key={index}>
                {itemValue}
                <div>
                  <button className="edit-btn" onClick={() => editItem(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => delItem(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


