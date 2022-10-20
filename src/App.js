import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {
  // 할일 목록을 관리할 데이터 구성
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  //  react 에서 css 를 {} 생성하는법

  // 할일 입력창 처리 관련
  const formChange = (e) => {
    setValue(e.target.value);
  };

  // 할일 저장 관련
  const formSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // todoData 를 업데이트 한다.
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    // JSX 기본적으로 하나의 Root 태그가 필요하다.
    <div className="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form formSubmit={formSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
