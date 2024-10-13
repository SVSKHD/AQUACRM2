import React, { useState } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

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

  // Sample data for export
  const invoiceData = [
    { id: 1, year: '2024', month: 'January', day: '1', amount: 500 },
    { id: 2, year: '2024', month: 'February', day: '2', amount: 700 },
    { id: 3, year: '2023', month: 'March', day: '5', amount: 1000 },
  ];

  // Function to export to CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Year', 'Month', 'Day', 'Amount'];
    const csvRows = [];

    // Create header row
    csvRows.push(headers.join(','));

    // Add data rows
    invoiceData.forEach(row => {
      const values = [row.id, row.year, row.month, row.day, row.amount];
      csvRows.push(values.join(','));
    });

    // Create Blob from CSV string
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Create download link and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'invoices.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    
    doc.text('Invoice Data', 10, 10);

    // Adding table headers
    const headers = ['ID', 'Year', 'Month', 'Day', 'Amount'];
    let y = 20;
    headers.forEach((header, i) => {
      doc.text(header, 10 + i * 30, y);
    });

    // Adding rows
    invoiceData.forEach((row, index) => {
      y += 10;
      doc.text(`${row.id}`, 10, y);
      doc.text(`${row.year}`, 40, y);
      doc.text(`${row.month}`, 70, y);
      doc.text(`${row.day}`, 100, y);
      doc.text(`${row.amount}`, 130, y);
    });

    doc.save('invoices.pdf');
  };

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

        {/* Export Buttons */}
        <div className="flex space-x-4 sm:col-span-2 md:col-span-4 justify-center mt-4">
          <button
            onClick={exportToCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Export to CSV
          </button>
          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Export to PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default AquaInvoiceFilter;