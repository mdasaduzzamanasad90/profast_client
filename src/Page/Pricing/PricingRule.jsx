import React from 'react';

const PricingRule = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        📦 Delivery Pricing Rules
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 p-3 text-left">Parcel Type</th>
              <th className="border border-gray-300 p-3 text-left">Weight</th>
              <th className="border border-gray-300 p-3 text-left">Within City</th>
              <th className="border border-gray-300 p-3 text-left">Outside City</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Document</td>
              <td className="border border-gray-300 p-3">Any</td>
              <td className="border border-gray-300 p-3 text-green-600 font-semibold">৳60</td>
              <td className="border border-gray-300 p-3 text-orange-600 font-semibold">৳80</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Non-Document</td>
              <td className="border border-gray-300 p-3">1kg to 3kg</td>
              <td className="border border-gray-300 p-3 text-green-600 font-semibold">৳110</td>
              <td className="border border-gray-300 p-3 text-orange-600 font-semibold">৳150</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 font-medium">Non-Document</td>
              <td className="border border-gray-300 p-3">3kg Up To</td>
              <td className="border border-gray-300 p-3 text-green-600 font-semibold">+৳40/kg</td>
              <td className="border border-gray-300 p-3 text-orange-600 font-semibold">+৳40/kg +৳40 extra</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm text-yellow-800">
          💡 <strong>Note:</strong> Outside city deliveries above 3kg include additional ৳40 charge
        </p>
      </div>
    </div>
  );
};

export default PricingRule;