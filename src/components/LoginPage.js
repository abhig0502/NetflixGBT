import React from "react";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import { useState } from "react";

const LoginPage = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div>
      <LoginHeader setShowModal={setShowModal} />
      <LoginBody showModal={showModal} setShowModal={setShowModal} />
      <img
        className="absolute top-0 left-0 -z-10 bg-fixed h-screen w-screen blur-[2px]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
        alt="background-img"
      />
    </div>
  );
};

export default LoginPage;
