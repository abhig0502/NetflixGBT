import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser, setUser } from "../utils/UserSlice";
import { auth } from "../utils/firebase";

const BaseHeader = ({ endElement , midElement}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browse");
        console.log(user);
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });
  },[])
  return (
    <div className="flex justify-between bg-gradient-to-b from-black">
      <div className="px-8 py-3 flex  ">
        <img className="w-44" src={LOGO} alt="Netflix-logo" />
      </div>
      <div>
      {endElement}
      {midElement}
      </div>
    </div>
  );
};

export default BaseHeader;
