import React from "react";

const Form = React.memo(({ value, setTodo, setValue }) => {
  console.log("FormList");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = {
      id: Math.random(),
      content: value,
      complete: false,
    };
    console.log(newTodoList);
    setTodo((prev) => [...prev, newTodoList]);
    setValue("");
  };
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={onChangeHandler}
      />
      <input type="submit" style={{ flex: "1" }} className="btn" value="입력" />
    </form>
  );
});

export default Form;
