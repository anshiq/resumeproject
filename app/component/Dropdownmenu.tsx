"use client";
import React, { useState, useRef, useEffect } from "react";

type Props = {};

function Dropdownmenu({}: Props) {
  const [toggle, setToggle] = useState(false);
  const name = "Your Name";
  const elements = [
    { name: "Link 1", a: "#" },
    { name: "Link 2", a: "#" },
    { name: "Link 3", a: "#" },
    // Add more links as needed
  ];

  const contentRef:any = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(toggle ? contentRef.current.scrollHeight : 0);
    }
  }, [toggle]);

  return (
    <div className="flex w-1/2 text-white flex-col bg-black">
      <div onClick={() => setToggle(!toggle)}>{name}</div>
      <div
        ref={contentRef}
        className={`flex flex-col bg-gray-800 overflow-hidden transition-maxHeight ease-in-out duration-300`}
        style={{ maxHeight: toggle ? `${contentHeight}px` : "0" }}
      >
        {elements.map((link, index) => {
          return (
            <a key={index} href={link.a}>
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdownmenu;
