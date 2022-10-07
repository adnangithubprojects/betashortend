import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { set } from "react-hook-form";
export default function Twitter() {
  const [link, setLink] = useState();
  const [Count, setCount] = useState(0);
  // const handleform = () => {

  //   //const res = await req.data;
  // };
  // handleform();
  useEffect(() => {
    axios.get("http://localhost:4000/testapi").then((res) => {
      console.log(res.data);
      setLink(res.data[1]);
    });
  }, []);

  // const qoutes = "https://type.fit/api/quotes";

  // const quotes = () => {
  //   let num = Math.floor(Math.random() * 10);
  //   console.log(data2[num].author);
  // };

  return (
    <div className="bg-zinc-700 h-screen py-5  flex flex-col gap-10 justify-center items-center ">
      <div className="  h-[450px] w-[500px] bg-blue-600 flex flex-col  justify-center items-center ">
        <div className="h-[350px] w-[400px] bg-white flex flex-col justify-between">
          <div className="relative flex flex-col justify-around border border-red-400 h-[300px]">
            <button className="absolute right-0 top-0 p-3 bg-blue-300 py-3">
              <FaTwitter />
            </button>

            <p className="text-6xl text-gray-600">&bdquo;</p>
            <p>hallo how are you mate</p>
            {/* <p>{link[1].id}</p> */}
            <p>
              {/* {link.slice(0, Count).map((it) => {
                return <p>{it.id}</p>;
              })} */}
            </p>
          </div>
          <button
            onClick={() => setCount(Math.floor(Math.random() * 10))}
            className="w-full bg-blue-300 py-3"
          >
            New Quotes
          </button>
        </div>
      </div>
    </div>
  );
}
