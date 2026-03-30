import React from "react";

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",

      imageLink: "https://i.ibb.co.com/Jjrc0nNG/user.png",
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",

      imageLink: "https://i.ibb.co.com/HLx1LJqp/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",

      imageLink: "https://i.ibb.co.com/S4tQDw8M/rocket.png",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-16 max-w-lg mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-5 right-5 bg-[#7F3EFF] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {step.id}
              </div>

              <div className="bg-purple-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform overflow-hidden p-4">
                <img
                  src={step.imageLink}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
