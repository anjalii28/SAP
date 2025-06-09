import React from 'react';
import { Target, Calendar } from 'lucide-react';

const GoalProgressTracker = () => {
  const goals = [
    {
      id: 1,
      title: 'Reduce emissions by 20% in 2025',
      progress: 68,
      deadline: 'Dec 2025',
      status: 'on-track',
      category: 'Carbon Reduction',
    },
    {
      id: 2,
      title: 'Cut electricity usage by 15% this quarter',
      progress: 85,
      deadline: 'Mar 2025',
      status: 'ahead',
      category: 'Energy Efficiency',
    },
    {
      id: 3,
      title: 'Achieve zero waste to landfill',
      progress: 42,
      deadline: 'Jun 2025',
      status: 'behind',
      category: 'Waste Management',
    },
    {
      id: 4,
      title: 'Install 50kW solar panels',
      progress: 25,
      deadline: 'Aug 2025',
      status: 'on-track',
      category: 'Renewable Energy',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'text-emerald-600 bg-emerald-100';
      case 'on-track': return 'text-blue-600 bg-blue-100';
      case 'behind': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'bg-emerald-500';
      case 'on-track': return 'bg-blue-500';
      case 'behind': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Target className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Goal Progress Tracker</h3>
          <p className="text-sm text-gray-500">Your sustainability milestones</p>
        </div>
      </div>

      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">{goal.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">{goal.category}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{goal.deadline}</span>
                  </div>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                {goal.status.replace('-', ' ')}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-700 ${getProgressColor(goal.status)}`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Set New Goal +
        </button>
      </div>
    </div>
  );
};

export default GoalProgressTracker;