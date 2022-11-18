import React from "react";
import Label from "./Label";
import { BsFillTrashFill } from "react-icons/bs";

function Itemlist(props) {
  const delById = () => {
    props.del(props.id);
  };
  return (
    <div
      className={`px-[10px] py-[15px] bg-white rounded-lg space-y-[10px] flex justify-between`}
    >
      <div className="space-y-3">
        <h2 className={`font-bold`}>{props.title}</h2>
        <div className={`flex items-center space-x-2`}>
          <img
            src={require(`../assets/${props.person}.jpg`)}
            className={`w-10 h-10 rounded-full`}
            alt="avatar"
          />
          <Label status={props.status} />
        </div>
      </div>
      <button onClick={delById}>
        <BsFillTrashFill className="w-5  h-5" />
      </button>
    </div>
  );
}

export default Itemlist;
