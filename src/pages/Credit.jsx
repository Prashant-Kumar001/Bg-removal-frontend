import React from "react";
import { plans } from "../assets/assets";



const Plan = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-16 px-4 md:px-10">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Choose Your Plan
        </h1>
        <p className="text-gray-500 mt-2">
          Flexible pricing based on your usage
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-6 border transition-all duration-300
              ${
                plan.id === "Advanced"
                  ? "bg-white shadow-xl scale-105 border-violet-500"
                  : "bg-white/80 backdrop-blur-lg hover:shadow-lg"
              }`}
          >
            {plan.id === "Advanced" && (
              <span className="absolute top-4 right-4 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-xl font-semibold text-gray-800">{plan.id}</h2>

            <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>

            <div className="mt-6 mb-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{plan.price}
              </span>
              <span className="text-gray-500 text-sm"> / month</span>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              🎯 {plan.credits} credits included
            </p>

            <ul className="space-y-3 mb-6 text-sm text-gray-600">
              <li>✅ Fast processing</li>
              <li>✅ High quality output</li>
              <li>✅ No watermark</li>
            </ul>

            <button
              className={`w-full py-2.5 rounded-xl text-sm font-medium transition
                ${
                  plan.id === "Advanced"
                    ? "bg-linear-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-90"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
