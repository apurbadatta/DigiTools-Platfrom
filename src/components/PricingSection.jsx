import React from "react";

const PricingSection = () => {
  return (
    <section className="py-18 px-6 text-center">
      <h2 className="text-3xl md:text-4xl text-black mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-16">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="max-w-5xl mx-auto grid  md:grid-cols-3 gap-8 items-center">
       
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-left hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-black ">Starter</h3>
          <p className="text-gray-500 text-sm mb-6">
            Perfect for getting started
          </p>
          <div className="mb-8">
            <span className="text-5xl text-black">$0</span>
            <span className="text-gray-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-gray-600">
            <li>✓ Access to 10 free tools</li>
            <li>✓ Basic templates</li>
            <li>✓ Community support</li>
            <li>✓ 1 project per month</li>
          </ul>
          <button className="w-full bg-[#7F3EFF] text-white py-4 rounded-full font-bold cursor-pointer">
            Get Started Free
          </button>
        </div>
        <div className="bg-[#7F3EFF] p-10 rounded-[2.5rem] text-white text-left relative shadow-2xl z-10 hover:shadow-lg">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-xs font-black uppercase ">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold">Pro</h3>
          <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
          <div className="mb-8">
            <span className="text-5xl font-black">$29</span>
            <span className="text-purple-200">/Month</span>
          </div>
          <ul className="space-y-4 mb-10">
            <li>✓ Access to all premium tools</li>
            <li>✓ Unlimited templates</li>
            <li>✓ Priority support</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Cloud sync</li>
          </ul>
          <button className="w-full bg-white text-[#7F3EFF] py-4 rounded-full font-bold cursor-pointer">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-left hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-black ">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
          <div className="mb-8">
            <span className="text-5xl text-black">$99</span>
            <span className="text-gray-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-gray-600">
            <li>✓ Everything in Pro</li>
            <li>✓ Team collaboration</li>
            <li>✓ Custom integrations</li>
            <li>✓ SLA guarantee</li>
            <li>✓ Custom branding</li>
          </ul>
          <button className="w-full bg-[#7F3EFF] text-white py-4 rounded-full font-bold cursor-pointer">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
