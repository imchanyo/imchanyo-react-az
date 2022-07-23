import React from "react";
import Lists from "./Lists";

const List = React.memo(({ handleClick, todoLists, setTodo }) => {
  console.log("List");
  return (
    <div>
      {todoLists.map((item) => (
        <Lists
          key={item.id}
          item={item}
          handleClick={handleClick}
          todoLists={todoLists}
          setTodo={setTodo}
        />
      ))}
    </div>
  );
});

export default List;
