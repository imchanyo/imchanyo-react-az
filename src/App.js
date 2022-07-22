import React, { Component } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <div className="todoBlock">
//         <div className="title">
//           <h1>할일 목록</h1>
//         </div>

//         <div>
//           <input type="checkbox" defaultChecked={false} />
//           공부하기
//           <button>x</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  state = {
    todoLists: [],
    value: "",
  };
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  handleClick = (id) => {
    const deleteTodoList = this.state.todoLists.filter(
      (item) => item.id !== id
    );
    this.setState({ todoLists: deleteTodoList });
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = {
      id: Date.now(),
      content: this.state.value,
      complete: false,
    };
    this.setState({
      todoLists: [...this.state.todoLists, newTodoList],
      value: "",
    });
  };

  onCompleteChange = (id) => {
    const newData = this.state.todoLists.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    console.log(newData);
    this.setState({ todoLists: newData });
  };
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.state.todoLists.map((item) => {
            return (
              <div style={this.getStyle(item.completed)} key={item.id}>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => this.onCompleteChange(item.id)}
                />
                {item.content}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(item.id)}
                >
                  x
                </button>
              </div>
            );
          })}

          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.onChangeHandler}
            />
            <input
              type="submit"
              style={{ flex: "1" }}
              className="btn"
              value="입력"
            />
          </form>
        </div>
      </div>
    );
  }
}
