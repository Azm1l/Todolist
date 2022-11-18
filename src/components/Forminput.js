import React, { useState } from "react";
import Button from "./Button";

function Forminput(props) {
  const [task, setTask] = useState("");

  const getAdd = (e) => {
    setTask(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (task !== "") {
      props.add(task);
    }
    setTask("");
  };

  return (
    <form className="flex space-x-2" type="text" onSubmit={submit}>
      <input
        className="rounded-lg px-1"
        placeholder="isi datanya"
        value={task}
        onChange={getAdd}
      />
      <Button text="Tambah" warna="blue" />
    </form>
  );
}

export default Forminput;
