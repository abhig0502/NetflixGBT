import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";

const VideoTitle = ({ title, overview }) => {

  const langs=useSelector(store=>store.config.lang);


    return (
      <div className="absolute z-10 w-[100%] aspect-video bg-gradient-to-r from-black mt-11">
        <h1 className="text-7xl text-white font-bold pt-60 pl-11 hover:text-6xl ">{title}</h1>
        <div className="w-[900px]">
          <p className="text-2xl pl-11 pt-8 mb-11 text-white">{overview}</p>
        </div>
        <div className="flex m-3">
          <button className=" text-xl font-bold text-black bg-white px-8 py-2 m-1 ml-8 rounded-lg hover:bg-black hover:text-white">
            {" "}
            {lang[langs].play}
          </button>
          <button className=" text-xl font-bold text-black px-6 py-2 m-1 bg-white rounded-lg hover:text-white hover:bg-black">
            {" "}
             {lang[langs].moreInfo}
          </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;
  