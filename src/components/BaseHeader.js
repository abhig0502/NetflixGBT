import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser, setUser } from "../utils/UserSlice";
import { auth } from "../utils/firebase";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const BaseHeader = ({ endElement, midElement }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const callback=(user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browse");
        // console.log(user);
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    }
    onAuthStateChanged(auth,callback);
  }, []);
  
  return (
    <div className="flex justify-between bg-gradient-to-b from-black relative z-20" >
      <div className="px-8 py-3 flex animate-scaleUp">
        <img className="w-44" src={LOGO} alt="Netflix-logo" />
      </div>
      <div className="flex">
        {endElement}
        {midElement}
      </div>
    </div>
  );
};

export default BaseHeader;
