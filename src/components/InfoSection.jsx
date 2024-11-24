import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
} from "react-icons/fa";

const InfoSection = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Fast Shipping",
      description: "šGet your orders delivered quickly and safely.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Customer Support",
      description: "24/7 support for all your shopping needs.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Money-Back Guarantee",
      description: "Shop confidently with our 30-day guarantee.",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure Payments",
      description: "Your transactions are always safe with us.",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 p-4 border rounded-lg bg-white shadow-md"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
