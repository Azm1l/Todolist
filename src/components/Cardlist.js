import React, { useState } from "react";
import { FcSurvey } from "react-icons/fc";
import AddDialog from "./AddDialog";
import Button from "./Button";
import Itemlist from "./Itemlist";

function Cardlist(props) {
  const [show, setShow] = useState("hidden");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Adding Database",
      person: "avatar2",
      status: "Progress",
    },
    {
      id: 2,
      title: "Creating UI/UX",
      person: "avatar3",
      status: "Review",
    },
  ]);

  const openModal = () => {
    setShow("");
  };

  const closeModal = () => {
    setShow("hidden");
  };

  const addTask = (data) => {
    const newId = todos.length + 1;
    setTodos([
      ...todos,
      {
        id: newId,
        title: data.title,
        person: data.avatar,
        status: data.status,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`mx-auto px-[10px] py-[10px] space-y-[10px] bg-[#59B4D1] rounded-lg w-[80%] md:w-[60%] lg:w-[50%]`}
    >
      <div className="flex items-center space-x-2">
        <FcSurvey className="w-6 h-6" />
        <h2 className={`text-white font-bold text-base`}>{props.header}</h2>
      </div>
      <Button text="Add Task" color="red" action={openModal} />
      <AddDialog show={show} close={closeModal} add={addTask} />
      {todos.map((item) => (
        <Itemlist
          key={item.id}
          title={item.title}
          id={item.id}
          person={item.person}
          status={item.status}
          del={deleteTask}
        />
      ))}
    </div>
  );
}

export default Cardlist;
