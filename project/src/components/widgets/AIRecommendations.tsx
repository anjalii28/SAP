import React from 'react';
import { Brain, TrendingUp, DollarSign, Clock, Check, X } from 'lucide-react';

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Switch to renewable energy supplier',
      description: 'Based on your usage patterns, switching to GreenPower could reduce emissions.',
      co2Savings: '1.2 tons CO₂/month',
      costSavings: '$150/month',
      priority: 'high',
      timeframe: '2-3 weeks',
    },
    {
      id: 2,
      title: 'Optimize HVAC schedule',
      description: 'Reduce heating during off-hours to cut energy consumption.',
      co2Savings: '0.8 tons CO₂/month',
      costSavings: '$200/month',
      priority: 'medium',
      timeframe: '1 week',
    },
    {
      id: 3,
      title: 'Install smart water meters',
      description: 'Monitor water usage in real-time to identify leak patterns.',
      co2Savings: '0.3 tons CO₂/month',
      costSavings: '$80/month',
      priority: 'low',
      timeframe: '4-6 weeks',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Brain className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
          <p className="text-sm text-gray-500">Personalized sustainability insights</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900">{rec.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(rec.priority)}`}>
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">CO₂ Savings</p>
                  <p className="text-sm font-medium text-emerald-600">{rec.co2Savings}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Cost Savings</p>
                  <p className="text-sm font-medium text-green-600">{rec.costSavings}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{rec.timeframe}</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <X className="w-3 h-3" />
                </button>
                <button className="px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
                  <Check className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
          View All Recommendations →
        </button>
      </div>
    </div>
  );
};

export default AIRecommendations;