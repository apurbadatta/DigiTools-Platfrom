import React from "react";
import PlayPng from "../assets/Play.png";
import BannerPng from "../assets/banner.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 space-x-2">
            <span className="w-2.5 h-2.5 bg-[#7F3EFF] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#7F3EFF]">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <br />
            <span className="text-[#7F3EFF]">Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#7F3EFF] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#6a32d9] transition cursor-pointer">
              Explore Products
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-purple-200 text-[#7F3EFF] px-8 py-4 rounded-full font-bold hover:bg-purple-200 transition cursor-pointer">
              <img src={PlayPng} alt="PlayPng" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Image/Graphics */}
        <div className="flex-1 w-full max-w-lg">
          <img
            src={BannerPng}
            alt="Digital Workflow"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover border-8 border-white/50"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
