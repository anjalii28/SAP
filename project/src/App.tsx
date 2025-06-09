// import React from 'react';
// import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar />
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col lg:ml-64">
//         <TopBar />
//         <main className="flex-1 p-4 lg:p-6">
//           <Dashboard />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import CarbonCalculator from './components/CarbonCalculator';
// import other components as needed

function App() {
  // Track active page
  const [activePage, setActivePage] = useState('Dashboard');

  // Pass setter to Sidebar
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col lg:ml-64">
        <TopBar />
        <main className="flex-1 p-4 lg:p-6">
          {activePage === 'Dashboard' && <Dashboard />}
          {activePage === 'Carbon Calculator' && <CarbonCalculator />}
          {/* add other pages conditionally */}
        </main>
      </div>
    </div>
  );
}

export default App;
