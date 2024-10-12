import React, { useState } from "react";

interface AquaInvoiceTableProps {
  columns: string[];
  dataColumns: Array<Record<string, any>>;
  search?: boolean; // Optional prop for enabling search functionality
}

const AquaInvoiceTable: React.FC<AquaInvoiceTableProps> = ({ columns, dataColumns, search = false }) => {
  const [query, setQuery] = useState<string>("");

  // Filter rows based on search query
  const filteredData = dataColumns?.filter((row) =>
    columns.some((col) => {
      const cellValue = row[col.toLowerCase()]?.toString().toLowerCase();
      return cellValue?.includes(query.toLowerCase());
    })
  );

  return (
    <div className="overflow-x-auto">
      {/* Conditionally render the search input if search is enabled */}
      {search && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 border rounded-md w-full focus:ring-indigo-600"
          />
        </div>
      )}

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns?.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredData?.length > 0 ? (
            filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns?.map((col, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-700"
                  >
                    {row[col.toLowerCase()] || "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns?.length} className="px-6 py-4 text-center text-sm text-gray-500">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AquaInvoiceTable;