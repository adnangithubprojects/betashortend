import React, { useState, useEffect } from "react";
import Props from "./Props";

export default function Practice() {
  const [variable, setChangevar] = useState(0);
  // useEffect(<function/>,<dependency/>)
  useEffect(() => console.log("useEffect Called"));

  return (
    <div className="flex flex-col gap-5">
      practice {variable}
      <button
        onClick={() => {
          setChangevar(variable + 1);
        }}
        className="p-3 bg-red-600 w-32 h-12"
      >
        click me
      </button>
      <Props name="adnan" age="34" />
    </div>
  );
}
