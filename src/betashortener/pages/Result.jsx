import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Result(props) {
  return (
    <div>
      <div className="flex">
        <p className="w-[150px] sm:w-[250px] md:w-[500px]  py-3 px-2 border-y-2   border-l-2 border-gray-600   ">
          {props.sendValuee}
        </p>
        <CopyToClipboard
          text={props.sendValuee}
          onCopy={(e) => {
            // setCopied(true);
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="text-sm w-24 sm:w-28  md:w-32 py-3 px-2 bg-[#2c479a] text-white  "
            // disabled
          >
            Copy Link
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
