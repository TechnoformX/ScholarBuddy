import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const results = location.state?.scholarships || "";

  console.log("Results received:", results);
  console.log("Type of results:", typeof results);

  let scholarshipsArray = [];

  try {
    let parsedResults = results;

    if (typeof results === 'string') {
      if (results.trim() === "") {
        parsedResults = [];
      } else {
        let cleanedResults = results
          .replace(/:\s*NaN/g, ': null')
          .replace(/:\s*undefined/g, ': null')
          .replace(/:\s*Infinity/g, ': null')
          .replace(/:\s*-Infinity/g, ': null');

        parsedResults = JSON.parse(cleanedResults);
        console.log("Parsed results from string:", parsedResults);
      }
    }

    if (Array.isArray(parsedResults)) {
      scholarshipsArray = parsedResults;
    } else if (parsedResults && typeof parsedResults === 'object') {
      scholarshipsArray = Object.values(parsedResults);
    } else {
      scholarshipsArray = [];
    }
  } catch (error) {
    console.error("Error parsing results:", error);
    scholarshipsArray = [];
  }

  console.log("Final scholarships array:", scholarshipsArray);
  console.log("First scholarship:", scholarshipsArray[0]);

  return (
    <div className="bg-gradient-to-b from-[#1f2a36] to-[#0f172a] min-h-screen py-12 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-12 font-serif tracking-wide">
        🎓 Top 10 Matched Scholarships
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {scholarshipsArray.length > 0 ? (
          scholarshipsArray.slice(0, 10).map((item, index) => {
            const scholarshipName =
              item.name ||
              item.scholarshipName ||
              item.title ||
              item.scholarship_name ||
              'Unnamed Scholarship';

            const searchLink = `https://www.google.com/search?q=${encodeURIComponent(
              scholarshipName + " scholarship site:.gov.in OR site:.edu"
            )}`;

            return (
              <a
                key={index}
                href={searchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22303c] text-white p-6 rounded-2xl shadow-lg w-72 transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-[#3a4a5c] block"
              >
                <h3 className="text-lg font-semibold mb-2 font-serif">
                  {scholarshipName}
                </h3>
                <p className="text-sm text-gray-300">
                  Click to learn more about this opportunity.
                </p>
              </a>
            );
          })
        ) : (
          <p className="text-white text-xl text-center">
            No matching scholarships found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Results;
