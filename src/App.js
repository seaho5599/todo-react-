import React, { Component } from "react";
export default class App extends Component {
  // state는 내용이 변하면 화면을 re-rendering한다.
  // vue 의 ref처럼..
  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: false,
      },
      {
        id: "2",
        title: "점심먹기",
        completed: false,
      },
      {
        id: "3",
        title: "리액트 공부하기",
        completed: false,
      },
    ],
    value: "",
  };
  // 할일 목록을 관리할 데이터 구성

  //  react 에서 css 를 {} 생성하는법
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  //  할일 삭제 메서드
  deleteTodo = (id) => {
    // 선택된 아이디와 다른 목록만 추출하기가 알고리즘 상 좋다.
    let newTodo = this.state.todoData.filter((data) => data.id !== id);
    // 새로운 todo 테이터를 state.todoData를 교체한다.
    this.setState({ todoData: newTodo });
  };
  // 할일 입력창 처리 관련
  formChange = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  // 할일 저장관련
  formSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // todoDate를 업데이트 한다.
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };
  // 할일 상태 변경
  completeChange = (id) => {
    let changeTodo = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: changeTodo });
  };
  render() {
    return (
      // JSX 기본적으로 하나의 Root 태그가 필요하다.
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          {
            /* 할일 목록 데이터를 출력한다. */
            this.state.todoData.map((data) => (
              <div style={this.listStyle(data.completed)} key={data.id}>
                <input
                  type="checkbox"
                  defaultChecked={data.completed}
                  onChange={() => this.completeChange(data.id)}
                />
                {data.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.deleteTodo(data.id)}
                >
                  X
                </button>
              </div>
            ))
          }

          <form style={{ display: "flex" }} onSubmit={this.formSubmit}>
            <input
              type="text"
              name="value"
              placeholder="할 일을 입력하세요."
              style={{ flex: "10", padding: "5px" }}
              value={this.state.value}
              onChange={this.formChange}
            />
            <input type="submit" value="입력" style={{ flex: "1" }} />
          </form>
        </div>
      </div>
    );
  }
}
