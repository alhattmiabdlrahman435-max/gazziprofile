import { asyncWrapProviders } from "async_hooks";
import React, { useState } from "react";

function Question({ question, answer }) {
  const [opend, setOpend] = useState(false);
  return (
    <div className={``}>
      <h2
        className={`text-[20px] max-sm:text-[18px] font-bold realtive z-10
        p-3 cursor-pointer max-w-full text-[#1e266d] flex justify-between items-center transition-all dark:bg-[#0c1225] dark:text-white
        ${opend ? "bg-[#424349] text-white" : "bg-[#e3e8ff]"}`}
        onClick={() => {
          setOpend(pre => !pre);
        }}
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`icon icon-tabler icons-tabler-filled icon-tabler-caret-down shrink-0
            ${opend ? "" : "rotate-270"}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
        </svg>
      </h2>
      <div
        className={`${opend ? "max-h-[500px]" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div
          className={`bg-white p-2.5 font-normal transition-all dark:text-[#111a33]
            
        `}
        >
          {answer.title !== null && <p>{answer.title}</p>}
          {answer.body !== null && (
            <ul className="px-2">
              {answer.body.map((b, i) => {
                return (
                  <li className="before:content-['•'] before:ml-2 max-sm:text-[18px]">
                    {b.important && <b>{b.important}</b>}{" "}
                    {b.pargraph && b.pargraph}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
