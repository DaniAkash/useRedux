import React, { useState } from "react";
import { addTodo } from "../redux/actions/actions";
import store from "../redux/store/store";

const InputField = () => {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    store.dispatch(addTodo(newTask));
    setNewTask("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="add new task"
        value={newTask}
      />
      <button onClick={addTask}>Add</button>
    </>
  );
};

export default InputField;
