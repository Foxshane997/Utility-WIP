import React, { useState, useEffect } from "react";
import "../assets/styles/ToDo.css";

function ToDo() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || [{ name: "To-Do", tasks: [] }]
  );
  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [newListName, setNewListName] = useState("");
  const [showListInput, setShowListInput] = useState(false);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const updatedLists = [...lists];
      updatedLists[selectedListIndex].tasks.push(newTask);
      setLists(updatedLists);
      setNewTask("");
    }
  }

  function handleTaskKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(taskIndex) {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].tasks = updatedLists[
      selectedListIndex
    ].tasks.filter((_, i) => i !== taskIndex);
    setLists(updatedLists);
  }

  function addNewList() {
    if (newListName.trim() !== "") {
      setLists([...lists, { name: newListName, tasks: [] }]);
      setNewListName("");
      setShowListInput(false);
    }
  }

  function handleListKeyPress(event) {
    if (event.key === "Enter") {
      addNewList();
    }
  }

  function deleteList() {
    if (lists.length > 1 && lists[selectedListIndex].name !== "To-Do") {
      const updatedLists = lists.filter(
        (_, index) => index !== selectedListIndex
      );
      setLists(updatedLists);
      setSelectedListIndex(0);
    }
  }

  return (
    <div className="to-do-list">
      <h1>{lists[selectedListIndex].name}</h1>
      <div className="list-header">
        <select
          value={selectedListIndex}
          onChange={(e) => setSelectedListIndex(Number(e.target.value))}
        >
          {lists.map((list, index) => (
            <option key={index} value={index}>
              {list.name}
            </option>
          ))}
        </select>
        {lists.length > 1 && lists[selectedListIndex].name !== "To-Do" && (
          <button className="delete-list-button" onClick={deleteList}>
            Delete List
          </button>
        )}
        <button
          className="add-list-button"
          onClick={() => setShowListInput(!showListInput)}
        >
          +
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleTaskKeyPress}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {lists[selectedListIndex].tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete Task
            </button>
          </li>
        ))}
      </ol>

      {showListInput && (
        <div className="new-list-input">
          <input
            type="text"
            placeholder="Enter list name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            onKeyPress={handleListKeyPress}
          />
          <button onClick={addNewList}>Add List</button>
        </div>
      )}
    </div>
  );
}

export default ToDo;
