import React from "react";
import BaseHeader from "./BaseHeader";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/ConfigSlice";
import lang from "../utils/LanguageConstants";

const LoginHeader = ({ setShowModal }) => {
  const dispatch=useDispatch();

  const langs=useSelector(store=>store.config.lang);

  const handleLanguageChange=(e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  const onHandleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="absolute w-[100%]">
      <BaseHeader
        endElement={
          <div className="flex">
            <div className="my-5 mx-3 p-3 rounded-lg ">
              <select className="px-4 py-1 rounded-lg border-white" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                className="m-6 bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-400 "
                onClick={onHandleClick}
              >
                {lang[langs].login}
              </button>
            </div>
          </div>
        }
      ></BaseHeader>
    </div>
  );
};

export default LoginHeader;
