import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

export const User = () => {
  const { state } = useContext(MyContext);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <h3>User Component</h3>
    </>
  );
};
