import React from "react";
import LoginModal from "./LoginModal";
import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const LoginBody = ({ showModal, setShowModal }) => {

  const langs=useSelector(store=>store.config.lang);
  console.log(lang);

  return (
    <>
      <div className=" flex justify-center items-center  ">
      {showModal && <LoginModal setShowLoginModal={setShowModal}/>}
        <h1 className="w-[1000px] text-[80px] font-bold text-white text-center mt-[200px] justify-items-center">
          {lang[langs].loginBodyText}
        </h1>
      </div>
    </>
  );
};

export default LoginBody;
