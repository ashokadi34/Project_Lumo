import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUpDown, Calendar } from 'lucide-react';

export default function TransactionsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'date' | 'amount' | 'description'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const transactions = [
    {
      id: 1,
      date: '2025-07-31',
      description: 'Salary Credit',
      type: 'credit',
      amount: 150000,
      category: 'Salary',
    },
    {
      id: 2,
      date: '2025-07-31',
      description: 'Emergency Fund Deposit',
      type: 'debit',
      amount: -30000,
      category: 'Investment',
    },
    {
      id: 3,
      date: '2025-07-31',
      description: 'Insurance Premium',
      type: 'debit',
      amount: -2000,
      category: 'Insurance',
    },
    {
      id: 4,
      date: '2025-07-31',
      description: 'Equity Allocation',
      type: 'debit',
      amount: -20000,
      category: 'Investment',
    },
    {
      id: 5,
      date: '2025-07-30',
      description: 'Mutual Fund SIP',
      type: 'debit',
      amount: -15000,
      category: 'Investment',
    },
    {
      id: 6,
      date: '2025-07-29',
      description: 'Grocery Shopping',
      type: 'debit',
      amount: -5000,
      category: 'Expenses',
    },
  ];

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    let aVal, bVal;
    
    switch (sortField) {
      case 'date':
        aVal = new Date(a.date).getTime();
        bVal = new Date(b.date).getTime();
        break;
      case 'amount':
        aVal = Math.abs(a.amount);
        bVal = Math.abs(b.amount);
        break;
      case 'description':
        aVal = a.description.toLowerCase();
        bVal = b.description.toLowerCase();
        break;
      default:
        aVal = a.date;
        bVal = b.date;
    }
    
    if (sortDirection === 'asc') {
      return aVal < bVal ? -1 : 1;
    }
    return aVal > bVal ? -1 : 1;
  });

  const handleSort = (field: 'date' | 'amount' | 'description') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
        />
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th 
                  onClick={() => handleSort('date')}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Date
                    <ArrowUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('description')}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    Description
                    <ArrowUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Type
                </th>
                <th 
                  onClick={() => handleSort('amount')}
                  className="px-6 py-4 text-right text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-2">
                    Amount
                    <ArrowUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedTransactions.map((transaction, index) => (
                <tr 
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(transaction.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.category === 'Salary' ? 'bg-green-100 text-green-800' :
                      transaction.category === 'Investment' ? 'bg-blue-100 text-blue-800' :
                      transaction.category === 'Insurance' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold text-right ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {sortedTransactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No transactions found matching your search.
        </div>
      )}
    </div>
  );
}