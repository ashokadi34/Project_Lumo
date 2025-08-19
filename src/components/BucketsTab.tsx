import React from 'react';
import { TrendingUp, PiggyBank, Shield, Briefcase, Plus, Edit3 } from 'lucide-react';

export default function BucketsTab() {
  const buckets = [
    {
      title: 'Emergency Fund',
      type: 'LOW',
      amount: 30000,
      icon: PiggyBank,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      progress: 75,
    },
    {
      title: 'Insurance',
      type: 'TERM_INSURANCE',
      amount: 2000,
      icon: Shield,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      progress: 100,
    },
    {
      title: 'Mutual Funds',
      type: 'MODERATE',
      amount: 40000,
      icon: TrendingUp,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      progress: 67,
    },
    {
      title: 'Stocks',
      type: 'HIGH',
      amount: 20000,
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      progress: 40,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Investment Buckets</h2>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 hover:scale-105 transform duration-200">
          <Plus size={18} />
          Add Bucket
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buckets.map((bucket, index) => {
          const Icon = bucket.icon;
          return (
            <div
              key={bucket.title}
              className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${bucket.borderColor} transform hover:scale-105 hover:shadow-xl transition-all duration-300 group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 ${bucket.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-8 h-8 ${bucket.color}`} />
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded-lg">
                  <Edit3 size={16} className="text-gray-500" />
                </button>
              </div>
              
              <h3 className={`text-xl font-bold ${bucket.color} mb-2`}>
                {bucket.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-gray-900">{bucket.type}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount:</span>
                  <span className="text-2xl font-bold text-gray-900">₹{bucket.amount.toLocaleString()}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Goal Progress</span>
                    <span className={`font-semibold ${bucket.color}`}>{bucket.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        bucket.color.includes('teal') ? 'from-teal-400 to-teal-600' :
                        bucket.color.includes('rose') ? 'from-rose-400 to-rose-600' :
                        bucket.color.includes('amber') ? 'from-amber-400 to-amber-600' :
                        'from-blue-400 to-blue-600'
                      } rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${bucket.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <button className={`flex-1 py-2 text-sm font-medium ${bucket.color} border-2 ${bucket.borderColor} rounded-lg hover:${bucket.bgColor} transition-colors`}>
                    Add Funds
                  </button>
                  <button className={`flex-1 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
                    bucket.color.includes('teal') ? 'bg-teal-600 hover:bg-teal-700' :
                    bucket.color.includes('rose') ? 'bg-rose-600 hover:bg-rose-700' :
                    bucket.color.includes('amber') ? 'bg-amber-600 hover:bg-amber-700' :
                    'bg-blue-600 hover:bg-blue-700'
                  }`}>
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}