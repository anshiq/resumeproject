"use client";
import React, { useState, useRef, useEffect } from "react";

type Props = { name: string };

function Dropdownmenu({ name }: Props) {
  const [toggle, setToggle] = useState(false);
  const elements = [
    { name: "Link 1", a: "#" },
    { name: "Link 2", a: "#" },
    { name: "Link 3", a: "#" },
    // Add more links as needed
  ];

  const contentRef: any = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(toggle ? contentRef.current.scrollHeight : 0);
    }
  }, [toggle]);

  return (
    <div className="flex my-1 w-[95%] text-white flex-col bg-black">
      <div
        className="cursor-pointer flex justify-between flex-row p-2"
        onClick={() => setToggle(!toggle)}
      >
        <div>{name}</div>
        <div>
          <svg
   className={`transform ${toggle ? "rotate-180" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 6.75L9 11.25L4.5 6.75"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`flex  flex-col overflow-hidden transition-maxHeight ease-in-out duration-300`}
        style={{ maxHeight: toggle ? `${contentHeight}px` : "0" }}
      >
        {elements.map((link, index) => {
          return (
            <a className="p-2" key={index} href={link.a}>
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdownmenu;
