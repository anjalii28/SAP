import React from 'react';
import CarbonEmissionCard from './widgets/CarbonEmissionCard';
import ResourceUsageCharts from './widgets/ResourceUsageCharts';
import AIRecommendations from './widgets/AIRecommendations';
import GoalProgressTracker from './widgets/GoalProgressTracker';
import ESGComplianceChecklist from './widgets/ESGComplianceChecklist';
import EducationalTip from './widgets/EducationalTip';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Educational Tip Banner */}
      <EducationalTip />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <CarbonEmissionCard />
          <ESGComplianceChecklist />
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          <ResourceUsageCharts />
          <GoalProgressTracker />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <AIRecommendations />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;