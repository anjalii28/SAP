import React from 'react';
import { Cloud, TrendingDown } from 'lucide-react';

const CarbonEmissionCard = () => {
  const currentEmissions = 2.4;
  const targetEmissions = 3.0;
  const progressPercentage = ((targetEmissions - currentEmissions) / targetEmissions) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Cloud className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">This Month's Emissions</h3>
            <p className="text-sm text-gray-500">vs. monthly target</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-emerald-600">
          <TrendingDown size={16} />
          <span className="text-sm font-medium">-12%</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">{currentEmissions}</span>
          <span className="text-lg text-gray-500">tons CO₂</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Target: {targetEmissions} tons CO₂</p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress to Target</span>
          <span className="font-medium text-emerald-600">{progressPercentage.toFixed(0)}% under target</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
        <p className="text-sm text-emerald-700">
          Great job! You're ahead of schedule to meet your monthly carbon reduction goal.
        </p>
      </div>
    </div>
  );
};

export default CarbonEmissionCard;