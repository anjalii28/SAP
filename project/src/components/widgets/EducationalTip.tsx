import React, { useState } from 'react';
import { Lightbulb, X, RotateCcw } from 'lucide-react';

const EducationalTip = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const tips = [
    {
      id: 1,
      title: "Energy Efficiency Tip",
      content: "Reducing 1 kWh of energy use saves approximately 0.9 kg of CO₂ emissions.",
      category: "Energy",
    },
    {
      id: 2,
      title: "Water Conservation",
      content: "A single dripping tap can waste over 3,000 litres of water per year.",
      category: "Water",
    },
    {
      id: 3,
      title: "Waste Management",
      content: "Recycling 1 ton of paper saves 3.3 cubic yards of landfill space.",
      category: "Waste",
    },
  ];

  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-sm p-6 text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="p-2 bg-white/20 rounded-lg">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold">Daily Sustainability Tip</h3>
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                {tips[currentTip].category}
              </span>
            </div>
            <p className="text-emerald-50 leading-relaxed">
              {tips[currentTip].content}
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={nextTip}
                className="flex items-center space-x-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Next Tip</span>
              </button>
              <div className="flex space-x-1">
                {tips.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTip ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EducationalTip;