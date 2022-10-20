import React from "react";

export default function Lists({ todoData, setTodoData }) {
  //  react 에서 css 를 {} 생성하는법
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  //  할일 상태 변경
  const completeChange = (id) => {
    let changeTodo = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(changeTodo);
  };

  //  할일 삭제 메서드
  const deleteTodo = (id) => {
    // 선택된 아이디와 다른 목록만 추출하기가 알고리즘 상 좋다.
    let newTodo = todoData.filter((data) => data.id !== id);
    // 새로운 todo 데이터를 state.todoData 를 교체한다.
    setTodoData(newTodo);
  };

  return (
    <div>
      {
        /* 할일 목록 데이터를 출력한다. */
        todoData.map((data) => (
          <div style={listStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => completeChange(data.id)}
            />{" "}
            {data.title}
            <button style={btnStyle} onClick={() => deleteTodo(data.id)}>
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}
