import React from "react";

const ReadySection = () => {
  return (
    <section className="bg-linear-to-br from-[#6366F1] to-[#A855F7] py-15 px-5 text-center text-white shadow-2xl">
      <h2 className="text-2xl md:text-4xl font-black mb-6">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto ">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8">
        <button className="bg-white text-[#7F3EFF] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition cursor-pointer">
          Explore Products
        </button>
        <button className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition cursor-pointer">
          View Pricing
        </button>
      </div>

      <p className=" text-sm font-medium">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  );
};

export default ReadySection;
