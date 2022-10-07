import React, { useState } from "react";
import Result from "./Result";
import logo from "../asset/images/bbt.png";
import axios from "axios";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
export default function Home() {
  const [link, setValue] = useState("");
  const [link1, setValue1] = useState("");
  const [condition, setcondition] = useState(true);

  const handleform = async (e) => {
    e.preventDefault();
    await axios
      .post("https://betashortener.herokuapp.com/app", { link: link })
      .then((data) => {
        setValue1(data.data.link);
        if (data.data.link == undefined || "") {
          setcondition(false);
        } else {
          setcondition(true);
        }
      });

    // setInputValue(Value);
    setValue("");
  };

  return (
    <div className="  py-5  flex flex-col gap-10 justify-center items-center ">
      <h1 className="text-3xl sm:text-4xl leading-7 pt-4 text-[#2c479a] capitalize font-bold ">
        Beta Shortener
      </h1>
      <Link to="/">
        <img
          src={logo}
          alt="upload"
          className="absolute  top-2 left-2 md:top-3   md:left-5 w-28 h-[110px]"
        />
      </Link>

      <div className="border  h-[400px] w-[300px] sm:w-[600px]  md:w-[850px] border-gray-600 flex items-center flex-col justify-center ">
        <h1 className="text-xl sm:text-3xl leading-7 text-black  font-bold ">
          Paste the URL to be Shortened
        </h1>

        <div className="flex flex-col my-12 items-center gap-7">
          <form>
            <div className="flex items-center relative inputContainer">
              <input
                type="text"
                className={condition ? "succes " : "wrong active"}
                value={link}
                onChange={(e) => setValue(e.target.value)}
                required
              />
              {condition ? (
                <li className="absolute right-36 top-4 list-none hidden text-green-600">
                  <FaCheckCircle />
                </li>
              ) : (
                <li className="absolute right-36 top-4 list-none text-red-600">
                  <FaExclamationCircle />
                </li>
              )}

              <button
                onClick={handleform}
                className="text-xs sm:text-base w-24 sm:w-28 md:w-32 py-3 px-2 bg-[#2c479a] text-white "
              >
                Shorten URL
              </button>
            </div>
            <small className={condition ? "hidden " : "text-red-600 "}>
              Enter Valid Link
            </small>
          </form>
          <Result sendValuee={link1} />
        </div>
        <div>
          <p className="text-sm p-2 sm:px-0 sm:w-96 text-justify md:text-center">
            Beta Shortener is a free tool to shrten a URL or reduce a link. Use
            our URL shorten to create a shortend link making it easy to
            remember.
          </p>
        </div>
      </div>

      <div className="md:w-[850px] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-3 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl leading-7 text-black capitalize font-bold ">
            Simple and fast URL Shortener!
          </h1>
          <p className="sm:text-xl text-justify">
            ShortURL allows to reduce long links from Instagram, Facebook,
            YouTube, Twitter, Linked In and top sites on the Internet, just
            paste the long URL and click the Shorten URL button. On the next
            screen, copy the shortened URL and share it on websites, chat and
            e-mail. After shortening the URL, check how many clicks it received.
          </p>
        </div>
        <div className="flex flex-col gap-3 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl leading-7 text-black capitalize font-bold ">
            Shorten, share and track.
          </h1>
          <p className="sm:text-xl text-justify">
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs, forums, instant messages, and other
            locations. Track statistics for your business and projects by
            monitoring the number of hits from your URL with the click counter,
            you do not have to register.
          </p>
        </div>
      </div>
    </div>
  );
}
