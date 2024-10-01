import React from "react";

const HomePageFooter = () => {
  return (
    <div className="w-[100%] h-[400px] bg-[#032541] flex mt-32">
      <div class>
        <div className="">
          <button className="text-2xl  text-cyan-500 bg-white font-semibold border border-3xl border-white p-2 rounded-lg m-5 animate-bounce">
            Join Community
          </button>
        </div>
        <div className="-mt-20 ml-16">
          <img
            className="w-[350px] h-[350px] ml-40"
            alt="movielogo"
            src="/movielogo.png"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="text-white m-4 mt-20">
          <h1 className="font-bold text-3xl mb-3">The Basics</h1>
          <h3 className="text-xl">About TMDB</h3>
          <h3 className="text-xl">Contact Us</h3>
          <h3 className="text-xl">Support Forums</h3>
          <h3 className="text-xl">API</h3>
          <h3 className="text-xl">System Status</h3>
        </div>

        <div className="text-white m-4 mt-20">
          <h1 className="font-bold text-3xl mb-3">Get Involved</h1>
          <h3 className="text-xl">Contribution Bible</h3>
          <h3 className="text-xl">Add New Movie</h3>
          <h3 className="text-xl">Add New TV Show</h3>
        </div>

        <div className="text-white m-4 mt-20">
          <h1 className="font-bold text-3xl mb-3">Community</h1>
          <h3 className="text-xl">Guidelines</h3>
          <h3 className="text-xl">Discussions</h3>
          <h3 className="text-xl">Leaderboard</h3>
        </div>

        <div className="text-white m-4 mt-20">
          <h1 className="font-bold text-3xl mb-3">Legal</h1>
          <h3 className="text-xl">Terms of Use</h3>
          <h3 className="text-xl">API Terms of Use</h3>
          <h3 className="text-xl">Privacy Policy</h3>
          <h3 className="text-xl">DMCA Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
