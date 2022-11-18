import React, { useState } from "react";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";

function AddDialog(props) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Progress");
  const [avatar, setAvatar] = useState("avatar2");

  const hiddenModal = () => {
    props.close();
  };

  const submitHandle = (e) => {
    e.preventDefault();
    addHandle();
  };

  const addHandle = () => {
    props.add({
      title: title,
      status: status,
      avatar: avatar,
    });
    hiddenModal();
    setTitle("");
    setAvatar("");
  };

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addStatus = (e) => {
    setStatus(e.target.value);
  };

  const addAvatar = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <div
      className={`bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-[-10px] right-0 bottom-0 left-0 ${props.show}`}
    >
      <div className="bg-white px-6 py-3 rounded-md text-center w-[90%] md:w-[30%] lg:w-[30%]">
        <div className="flex justify-end">
          <button onClick={hiddenModal}>
            <MdOutlineClose />
          </button>
        </div>
        <h1 className="text-xl mb-4 font-bold text-slate-500">Add Task</h1>
        <form
          className="space-y-3 flex flex-col"
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <input
            className="border border-black rounded-md px-1 py-1"
            placeholder="Type Some Task..."
            value={title}
            onChange={addTitle}
          ></input>
          <select
            className="px-1 py-1 rounded-md border border-black"
            onChange={addStatus}
            value={status}
          >
            <option value="Progress">Progress</option>
            <option value="Review">Review</option>
            <option value="Done">Done</option>
          </select>
          <select
            className="px-1 py-1 rounded-md border border-black"
            onChange={addAvatar}
            value={avatar}
          >
            <option value="avatar2">avatar2</option>
            <option value="avatar3">avatar3</option>
          </select>
          <Button text="OK" color="blue" type="submit" action={hiddenModal} />
        </form>
      </div>
    </div>
  );
}

export default AddDialog;
