import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#7F3EFF] py-6 px-6">
      <div className="max-w-5xl mx-auto py-6">
        <div className="grid  md:grid-cols-3 gap-6  items-center">
         
          <div className="text-center md:border-r border-white/30 last:border-0 px-4">
            <h2 className="text-5xl font-extrabold text-white mb-2">50K+</h2>
            <p className="text-purple-100 text-lg">Active Users</p>
          </div>

          
          <div className="text-center md:border-r border-white/30 last:border-0 px-4">
            <h2 className="text-5xl font-extrabold text-white mb-2">200+</h2>
            <p className="text-purple-100 text-lg">Premium Tools</p>
          </div>

          
          <div className="text-center px-4">
            <h2 className="text-5xl font-extrabold text-white mb-2">4.9</h2>
            <p className="text-purple-100 text-lg">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
