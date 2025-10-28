import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";

function Todo({ updateText, setUpdateText }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    // setUpdateText(id);
    const todoUpdate = todos.filter((todo) => todo.id === id);
    setUpdateText({ id: id, text: todoUpdate[0].text, edit: true });
  };

  return (
    <>
      <div>
        {todos &&
          todos.map((todo) => {
            return (
              <>
                {/* <TodoItem todo={todo} handleUpdate={handleUpdate} updateText={updateText} /> */}
                <li key={todo.id}>
                  {todo.text}
                  <button
                    onClick={() => {
                      handleUpdate(todo.id);
                    }}
                  >
                    {updateText.id === todo.id ? "Updating" : "Update"}
                  </button>
                  <button onClick={() => dispatch(removeTodo(todo.id))}>
                    X
                  </button>
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
