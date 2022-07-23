import React from "react";

const Lists = React.memo(({ item, todoLists, setTodo, handleClick }) => {
  console.log("Lists");

  const onCompleteChange = (id) => {
    const newData = todoLists.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    setTodo(newData);
  };

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  return (
    <div style={getStyle(item.completed)}>
      <input
        type="checkbox"
        defaultChecked={false}
        onChange={() => onCompleteChange(item.id)}
      />
      {item.content}
      <button style={btnStyle} onClick={() => handleClick(item.id)}>
        x
      </button>
    </div>
  );
});

export default Lists;
