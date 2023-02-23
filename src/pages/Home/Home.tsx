import classNames from "classnames";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleDarkMode } from "../../store/features/persistSlice";
import { addTodo, deleteTodo } from "../../store/features/todosSlice";
function Home() {
  const persist = useAppSelector((state) => state.persist);
  const listTodo = useAppSelector((state) => state.todos.listTodo);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  return (
    <div
      className={classNames(
        "flex flex-col py-12 items-center h-screen",
        persist.darkMode && "bg-zinc-900"
      )}
    >
      <h1
        className={classNames(
          "text-3xl font-bold underline mb-8",
          persist.darkMode && "text-white"
        )}
      >
        Hello world
      </h1>
      <button
        className={classNames(
          "border-2 border-gray-400, p-4 rounded-lg",
          persist.darkMode && "text-white"
        )}
        onClick={() => dispatch(toggleDarkMode())}
      >
        Change Theme
      </button>

      <div className="flex p-4 items-center justify-center">
        <input
          type="text"
          className="border-2 mr-2 h-11"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className={classNames(
            "border-2 border-gray-400 p-2 rounded-sm",
            persist.darkMode && "text-white"
          )}
          onClick={() => {
            dispatch(addTodo(text));
            setText("");
          }}
        >
          Add todo
        </button>
      </div>
      {listTodo.length > 0 &&
        listTodo.map((item: string, index: number) => (
          <div key={index} className="mt-4 flex items-center">
            <div
              className={classNames(
                "mr-4 w-52",
                persist.darkMode && "text-white"
              )}
            >
              {item}
            </div>

            <button
              className={classNames(
                "border-2 border-gray-400 p-1 rounded-sm",
                persist.darkMode && "text-white"
              )}
              onClick={() => dispatch(deleteTodo(item))}
            >
              Delete todo
            </button>
          </div>
        ))}
    </div>
  );
}

export default Home;
