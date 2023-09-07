import { useState, useCallback, useEffect } from "react";
import Toggle from "./components/Toggle";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [Password, setPassword] = useState("");
  const [text, setText] = useState("Copy");
  const [bgClass, setBGClass] = useState("bg-black");

  const passwordGenerator = useCallback(() => {
    // preventDefault();
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (characters) str += '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, characters, passwordGenerator]);

  const copyText = useCallback(() => {
    navigator.clipboard.writeText(Password);
    setText("Copied");
    setBGClass("bg-green-600");
  }, [Password]);

  useEffect(() => {
    setText("Copy");
    setBGClass("bg-black");
  }, [length, characters, number, Password]);

  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl text-center font-semibold">
            Password Generator
          </h1>
          <form className="mt-6">
            <div className="flex justify-between gap-3"></div>
            <label
              htmlFor="textarea"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Generate a random Password
            </label>
            <textarea
              id="textarea"
              value={Password}
              type="text"
              readOnly
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              rows={3}
            />
          </form>
          <div className="flex justify-between text-sm gap-x-2 mt-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={80}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <Toggle
                type="Numbers"
                defaultChecked={number}
                onChangeFunc={() => {
                  setNumber((prev) => !prev);
                }}
              />
            </div>
            <div className="flex items-center gap-x-1">
              <Toggle
                type="Characters"
                defaultChecked={characters}
                onChangeFunc={() => {
                  setCharacters((prev) => !prev);
                }}
              />
            </div>
          </div>
          <div className="d-flex mt-0">
            <button
              onClick={copyText}
              type="submit"
              className={`w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase ${bgClass} shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none`}
            >
              {text}
            </button>
            <button
              onClick={passwordGenerator}
              type="submit"
              className="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 shadow-lg focus:outline-none hover:bg-green-900 hover:shadow-none"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
