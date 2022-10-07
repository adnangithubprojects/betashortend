import React from "react";

export default function Card({ image, title, para }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-64 h-64">
      <h1>{image}</h1>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-center">{para}</p>
    </div>
  );
}
