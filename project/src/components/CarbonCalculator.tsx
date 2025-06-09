import React, { useState } from 'react';
import { Cloud, TrendingDown, TrendingUp } from 'lucide-react';

const CarbonCalculator = () => {
  const [currentEmissions, setCurrentEmissions] = useState(2.4);  // default value
  const targetEmissions = 3.0;

  const progressPercentage = ((targetEmissions - currentEmissions) / targetEmissions) * 100;
  const difference = targetEmissions - currentEmissions;
  const isUnderTarget = currentEmissions <= targetEmissions;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Carbon Calculator</h1>

      {/* Input */}
      <label className="block mb-4">
        <span className="text-gray-700 font-semibold">Enter your emissions this month (tons CO₂):</span>
        <input 
          type="number" 
          step="0.01"
          min="0"
          value={currentEmissions} 
          onChange={e => setCurrentEmissions(parseFloat(e.target.value) || 0)} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
        />
      </label>

      {/* Emission card */}
      <div className="bg-emerald-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Cloud className="w-6 h-6 text-emerald-600" />
            <h2 className="text-lg font-semibold text-gray-900">This Month's Emissions</h2>
          </div>
          <div className={`flex items-center space-x-1 ${isUnderTarget ? 'text-emerald-600' : 'text-red-600'}`}>
            {isUnderTarget ? <TrendingDown size={18} /> : <TrendingUp size={18} />}
            <span className="font-medium">
              {isUnderTarget 
                ? `-${Math.abs((difference / targetEmissions) * 100).toFixed(0)}%` 
                : `+${Math.abs((difference / targetEmissions) * 100).toFixed(0)}%`}
            </span>
          </div>
        </div>

        <p className="text-3xl font-bold text-gray-900">{currentEmissions.toFixed(2)} tons CO₂</p>
        <p className="text-sm text-gray-600 mb-4">Target: {targetEmissions} tons CO₂</p>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">Progress to Target</span>
            <span className={`font-semibold ${isUnderTarget ? 'text-emerald-600' : 'text-red-600'}`}>
              {isUnderTarget 
                ? `${progressPercentage.toFixed(0)}% under target` 
                : `${Math.abs(progressPercentage).toFixed(0)}% over target`}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${isUnderTarget ? 'bg-emerald-500' : 'bg-red-500'}`}
              style={{ width: `${Math.min(Math.abs(progressPercentage), 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-emerald-100 rounded-lg text-emerald-800">
          {isUnderTarget
            ? "Great job! You're ahead of schedule to meet your carbon reduction goal."
            : "Keep going! You're above your target, try to reduce emissions this month."}
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
