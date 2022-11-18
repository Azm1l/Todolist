import React from "react";
import Button from "./Button";

function Todoitem(props) {
  const delById = (id) => {
    props.del(id);
  };
  return (
    <div
      className={`flex items-center justify-between bg-green-300 px-2 py-2 rounded-lg`}
    >
      <h2>{props.todo.title}</h2>
      <div className="space-x-2">
        <Button text="Edit" warna="blue" />
        <Button
          text="Hapus"
          warna="red"
          onClick={props.del}
          action={() => delById(props.todo.id)}
        />
      </div>
    </div>
  );
}

export default Todoitem;
