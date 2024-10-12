import React, { useState } from 'react';

interface AquaInvoiceFilterProps {
  totalInvoices: number;
}

const AquaInvoiceFilter: React.FC<AquaInvoiceFilterProps> = ({ totalInvoices }) => {
  // States for Year, Month, and Day
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  
  // Example options for the dropdowns
  const years = ['2024', '2023', '2022']; 
  const months = ['January', 'February', 'March']; 
  const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 

  return (
    <div className="bg-indigo-300 text-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Filter Invoices</h1>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {/* Year Dropdown */}
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select year</option>
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>

        {/* Month Dropdown */}
        <div>
          <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select month</option>
            {months.map((mon) => (
              <option key={mon} value={mon}>
                {mon}
              </option>
            ))}
          </select>
        </div>

        {/* Day Dropdown */}
        <div>
          <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day</label>
          <select
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Total Invoices Display */}
        <div className="flex items-center justify-center sm:col-span-2 md:col-span-4">
          <h4 className="text-2xl font-semibold">
            Total Invoices: <span className="font-bold">{totalInvoices}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AquaInvoiceFilter;