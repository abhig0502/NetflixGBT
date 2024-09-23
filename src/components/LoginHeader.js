import React from "react";
import BaseHeader from "./BaseHeader";
import LoginModal from "./LoginModal";

const LoginHeader = ({setShowModal}) => {
  const onHandleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="absolute w-[100%]">
      <BaseHeader
        endElement={
          <div className="">
            <button className="m-6 bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-400 hover:text-xl" onClick={onHandleClick}>
              Login
            </button>
          </div>
        }
      ></BaseHeader>
    </div>
  );
};

export default LoginHeader;
