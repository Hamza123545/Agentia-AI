"use client";
import { motion } from "framer-motion";

interface Plan {
  title: string;
  price: string;
  features: string[];
}

const Pricing = () => {
  const plans: Plan[] = [
    {
      title: "Starter",
      price: "$499",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support",
      ],
    },
    {
      title: "Professional",
      price: "$999",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl text-center font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
        Choose Your Plan
      </h2>
      <p className="text-gray-400 mt-2 text-lg sm:text-xl">
        Scale your AI capabilities with our flexible pricing
      </p>

      {/* Pricing Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, borderColor: "#6D28D9" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`p-6 rounded-xl w-full sm:w-80 shadow-lg transition-all border border-gray-800 ${
              plan.title === "Professional"
                ? "bg-gradient-to-b from-[#1E073E] to-[#0A021A] border-purple-500"
                : "bg-[#111]"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-4xl font-bold mt-2">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-sm font-normal">/month</span>
              )}
            </p>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-400">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  {/* Purple Check Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-purple-500 mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full py-2 rounded-lg text-white font-semibold transition-all ${
                plan.title === "Professional"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  : "border border-gray-700 hover:bg-gray-800"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
