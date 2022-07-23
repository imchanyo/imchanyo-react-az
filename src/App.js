import { useState, useCallback } from "react";
import "./App.css";
import Lists from "./components/Lists";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  console.log("App");
  const [value, setValue] = useState("");
  const [todoLists, setTodo] = useState([]);
  const handleClick = useCallback(
    (id) => {
      const deleteTodoList = todoLists.filter((item) => item.id !== id);
      setTodo(deleteTodoList);
    },
    [todoLists]
  );

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>
        <List
          handleClick={handleClick}
          todoLists={todoLists}
          setTodo={setTodo}
        />
        <Form value={value} setValue={setValue} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default App;
