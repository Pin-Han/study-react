import React from "react";
const Child = ({ name, count }) => {
  console.log("test component");
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  );
};
export default React.memo(Child);
