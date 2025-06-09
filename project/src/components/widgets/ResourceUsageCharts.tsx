import React from 'react';
import { Zap, Droplet, Trash2 } from 'lucide-react';

const ResourceUsageCharts = () => {
  const resources = [
    {
      icon: Zap,
      label: 'Energy Usage',
      value: 1250,
      unit: 'kWh',
      percentage: 75,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      progressColor: 'bg-yellow-500',
    },
    {
      icon: Droplet,
      label: 'Water Consumption',
      value: 3200,
      unit: 'litres',
      percentage: 60,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      progressColor: 'bg-blue-500',
    },
    {
      icon: Trash2,
      label: 'Waste Generation',
      value: 45,
      unit: 'kg',
      percentage: 30,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      progressColor: 'bg-red-500',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Live Resource Usage</h3>
        <p className="text-sm text-gray-500">Current month consumption</p>
      </div>

      <div className="space-y-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${resource.bgColor} rounded-lg`}>
                    <Icon className={`w-4 h-4 ${resource.color}`} />
                  </div>
                  <span className="font-medium text-gray-900">{resource.label}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{resource.value.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 ml-1">{resource.unit}</span>
                </div>
              </div>
              
              {/* Progress Ring Alternative - Horizontal Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Usage</span>
                  <span>{resource.percentage}% of limit</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${resource.progressColor} h-2 rounded-full transition-all duration-700`}
                    style={{ width: `${resource.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Data updated 5 minutes ago • Next update in 10 minutes
        </p>
      </div>
    </div>
  );
};

export default ResourceUsageCharts;