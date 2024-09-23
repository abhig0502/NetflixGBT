import React from "react";
import LoginModal from "./LoginModal";

const LoginBody = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className=" flex justify-center items-center  ">
      {showModal && <LoginModal setShowLoginModal={setShowModal}/>}
        <h1 className="w-[1000px] text-[80px] font-bold text-white text-center mt-[200px] justify-items-center">
          Unlimited movies,TV shows and more
        </h1>
      </div>
    </>
  );
};

export default LoginBody;
