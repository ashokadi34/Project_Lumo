import React, { useState } from 'react';
import { LogOut, User, TrendingUp, Shield, Briefcase, DollarSign } from 'lucide-react';
import OverviewTab from './OverviewTab';
import BucketsTab from './BucketsTab';
import TransactionsTab from './TransactionsTab';
import ProfileTab from './ProfileTab';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: TrendingUp },
    { id: 'buckets', label: 'BUCKETS', icon: Briefcase },
    { id: 'transactions', label: 'TRANSACTIONS', icon: DollarSign },
    { id: 'profile', label: 'PROFILE', icon: User },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'buckets':
        return <BucketsTab />;
      case 'transactions':
        return <TransactionsTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-600" />
            </div>
            <h1 className="text-xl font-bold text-white">LUMO Dashboard</h1>
          </div>
          <button
            onClick={onLogout}
            className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-all duration-200 flex items-center gap-2 hover:scale-105"
          >
            <LogOut size={18} />
            LOGOUT
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 text-sm font-medium transition-all duration-200 relative group flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-500 hover:text-teal-600'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 animate-slide-in"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="animate-fade-in">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}