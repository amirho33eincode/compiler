import React, { useState } from "react";

const App = () => {
  const [code, setCode] = useState("//Write Your Js Code Here ...");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(""); //clear previous output
    try {
      const script = new Function(code);
      console.log = (...logs) => {
        setOutput((prev) => prev + logs.join(" ") + "\n");
      };
      script();
    } catch (error) {
      setOutput(`Error : ${error.message}\nCode:${code}`);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4">
        <h2 className="text-4xl font-bold mb-6">
          {" "}
          Compiler Online JavaScript{" "}
        </h2>{" "}
        <div className="w-full max-w-3xl p-4 bg-gray-800 round-lg shodow-md">
          <textarea
            className="w-full p-3 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            rows="10"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />{" "}
          <button
            onClick={() => {
              runCode();
            }}
            className="w-full py-2 mb-4 text-lg font-bold text-white bg-purple-700 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            {" "}
            Run Code{" "}
          </button>{" "}
          <div className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-semibold"> Output </h2>{" "}
            <pre className="mt-2 text-gray-300 "> {output} </pre>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default App;
