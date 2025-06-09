import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left section - Title */}
        <div className="flex items-center space-x-4">
          <div className="lg:hidden w-8"></div> {/* Spacer for mobile menu button */}
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
            <p className="text-sm text-gray-500">Monitor your environmental impact</p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search insights..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User profile */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Sustainability Officer</p>
            </div>
            <div className="relative">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-emerald-600" />
              </div>
            </div>
            <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;