import React from "react";

function Button(props) {
  const click = () => {
    props.action();
  };
  return (
    <button
      className={`py-1 px-1 bg-${props.color}-600 text-white rounded-lg`}
      onClick={click}
    >
      {props.text}
    </button>
  );
}

export default Button;
