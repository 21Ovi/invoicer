import React from "react";

export default function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercare tracking-wide text-4xl mb-3">
            Invoicer
          </h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-red-500 
                  text-white
                  font-bold
                  py-2 px-8 rounded
                  shadow border-2
                  border-red-500
                  hover:bg-transparent 
                  hover:text-red-500 
                  transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button
                className="bg-green-500 
                  text-white
                  font-bold
                  py-2 px-8 rounded
                  shadow border-2
                  border-green-500
                  hover:bg-transparent 
                  hover:text-green-500 
                  transition-all duration-300"
              >
                Download
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500 
                  text-white
                  font-bold
                  py-2 px-8 rounded
                  shadow border-2
                  border-blue-500
                  hover:bg-transparent 
                  hover:text-blue-500 
                  transition-all duration-300"
              >
                Send
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
