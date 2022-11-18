import React, { useState } from "react";

function Label(props) {
  return (
    <div className={`text-white px-[4px] py-[4px] bg-blue-500 rounded-sm`}>
      <h2>{props.status}</h2>
    </div>
  );
}

export default Label;
