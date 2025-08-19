import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, PiggyBank, Shield, Briefcase } from 'lucide-react';

export default function OverviewTab() {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const targetProgress = 61;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(targetProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const investments = [
    {
      title: 'Emergency Fund',
      type: 'LOW',
      amount: 30000,
      icon: PiggyBank,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      title: 'Insurance',
      type: 'TERM_INSURANCE',
      amount: 2000,
      icon: Shield,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
    },
    {
      title: 'Mutual Funds',
      type: 'MODERATE',
      amount: 40000,
      icon: TrendingUp,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      title: 'Stocks',
      type: 'HIGH',
      amount: 20000,
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Salary Overview Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-6 h-6 text-teal-600" />
          <h2 className="text-2xl font-bold text-gray-900">Salary Overview</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monthly Salary:</span>
            <span className="text-xl font-semibold text-gray-900">₹1,50,000</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Allocated:</span>
            <span className="text-xl font-semibold text-gray-900">₹92,000</span>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="text-teal-600 font-semibold">{animatedProgress}% allocated</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-2000 ease-out"
                style={{ width: `${animatedProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investments.map((investment, index) => {
          const Icon = investment.icon;
          return (
            <div
              key={investment.title}
              className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${investment.borderColor} transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${investment.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-6 h-6 ${investment.color}`} />
              </div>
              
              <h3 className={`text-lg font-semibold ${investment.color} mb-2`}>
                {investment.title}
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Type:</span>
                  <span className="text-sm font-medium text-gray-700">{investment.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Amount:</span>
                  <span className="text-lg font-bold text-gray-900">₹{investment.amount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className={`w-full py-2 text-sm font-medium ${investment.color} hover:bg-opacity-10 ${investment.bgColor} rounded-lg transition-colors`}>
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}