import { useState } from "react";
import "./App.css";
import Forminput from "./components/Forminput";
import Todoitem from "./components/Todoitem";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "mengaji",
    },
    {
      id: 2,
      title: "mengodong",
    },
  ]);

  const hapus = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const addTask = (data) => {
    const newid = list.length;
    setList([
      ...list,
      {
        id: newid + 1,
        title: data,
      },
    ]);
  };

  return (
    <>
      <div className="h-screen bg-gray-300 items-center border border-sm flex flex-col justify-start space-y-3">
        <h1 className=" font-bold ">Todo List boong boongan</h1>
        <div className={`space-y-3`}>
          <Forminput add={addTask} />
          {list.map((item) => (
            <Todoitem key={item.id} todo={item} del={hapus} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
