import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  // states
  let [task, updateTask] = useState();
  let [arr, updateArr] = useState([]);
  function change(e) {
    // works when cliked on tasks
    updateTask(e.target.value);
  }

  function mkarr() {
    // adding new task in array
    updateArr((prev) => {
      return [...prev, task];
    });
    updateTask("");
  }
  return (
    <>
      <div className="root">
        <div className="main">
          <h1>
            ToDo List <span> 📝</span>
          </h1>
          <input
            type="text"
            placeholder="write your task"
            onChange={change}
            value={task}
          />
          <Button className="btn" onClick={mkarr}>
            <AddIcon className="plus"></AddIcon>
          </Button>
          <ul>
            {arr.map((value, index) => {
              return <List index={index} value={value} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function List(props) {
  // states of list of tasks
  let [line, ch] = useState(false);
  let [dis, disp] = useState(true);

  let cl = () => {
    // when clicked on dustbin
    ch(true);
    disp(false);
  };

  return (
    <>
      <li
        key={props.index}
        style={{ textDecoration: line ? "line-through" : "none" }}
      >
        {props.index + 1}. {props.value}{" "}
        <DeleteIcon
          className="del"
          style={{ display: dis ? "inline-block" : "none" }}
          id={props.index}
          onClick={cl}
        />
      </li>
    </>
  );
}

export default App;
