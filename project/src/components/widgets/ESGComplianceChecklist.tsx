import React from 'react';
import { FileCheck, Check, Clock, AlertCircle } from 'lucide-react';

const ESGComplianceChecklist = () => {
  const checklistItems = [
    {
      id: 1,
      task: 'Published ESG Policy',
      completed: true,
      dueDate: 'Completed',
      priority: 'high',
    },
    {
      id: 2,
      task: 'Completed carbon audit',
      completed: true,
      dueDate: 'Completed',
      priority: 'high',
    },
    {
      id: 3,
      task: 'Submitted BRSR Report',
      completed: false,
      dueDate: 'Due Mar 15',
      priority: 'high',
    },
    {
      id: 4,
      task: 'Employee training program',
      completed: false,
      dueDate: 'Due Mar 30',
      priority: 'medium',
    },
    {
      id: 5,
      task: 'Supplier sustainability assessment',
      completed: false,
      dueDate: 'Due Apr 15',
      priority: 'medium',
    },
    {
      id: 6,
      task: 'Quarterly emissions report',
      completed: true,
      dueDate: 'Completed',
      priority: 'low',
    },
  ];

  const completedCount = checklistItems.filter(item => item.completed).length;
  const completionPercentage = (completedCount / checklistItems.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <FileCheck className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">ESG Compliance</h3>
          <p className="text-sm text-gray-500">Quick checklist overview</p>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-bold text-teal-600">{completedCount}/{checklistItems.length} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {checklistItems.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
              item.completed 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
              item.completed 
                ? 'bg-emerald-500 border-emerald-500' 
                : 'border-gray-300 hover:border-gray-400'
            }`}>
              {item.completed && <Check className="w-3 h-3 text-white" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${
                item.completed ? 'text-emerald-900 line-through' : 'text-gray-900'
              }`}>
                {item.task}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                {!item.completed && (
                  <div className="flex items-center space-x-1">
                    {item.dueDate.includes('Due') ? (
                      <Clock className="w-3 h-3 text-orange-500" />
                    ) : null}
                    <span className={`text-xs ${
                      item.dueDate.includes('Due') ? 'text-orange-600' : 'text-gray-500'
                    }`}>
                      {item.dueDate}
                    </span>
                  </div>
                )}
                {item.completed && (
                  <span className="text-xs text-emerald-600">{item.dueDate}</span>
                )}
              </div>
            </div>

            {!item.completed && item.priority === 'high' && (
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <button className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
          View Full Compliance Dashboard →
        </button>
      </div>
    </div>
  );
};

export default ESGComplianceChecklist;