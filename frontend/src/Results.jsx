import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const results = location.state?.scholarships || [];

  return (
    <div className="bg-[#2b333b] min-h-screen py-10">
      <h2 className='text-white text-4xl font-bold text-center mb-10'>Top 10 Matched Scholarships</h2>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {results.length > 0 ? (
          results.slice(0, 10).map((item, index) => (
            <div key={index} className="bg-[#1e2a36] text-white p-6 rounded-lg shadow-md w-[300px] text-center">
              <h3 className="text-xl font-semibold mb-4">{item.name || "Unnamed Scholarship"}</h3>
            </div>
          ))
        ) : (
          <p className="text-white text-xl text-center">No matching scholarships found.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
