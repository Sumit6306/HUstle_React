import React from "react";

function SkilledUnskilled() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="inline-flex border border-gray-300 rounded-full overflow-hidden shadow-md">
          <button className="px-8 py-3 text-sm font-medium text-black bg-white hover:bg-blue-600 focus:outline-none">
            Skilled
          </button>
          <button className="px-8 py-3 text-sm font-medium text-black bg-white hover:bg-blue-600 focus:outline-none">
            Unskilled
          </button>
        </div>
      </div>
    </>
  );
}

export default SkilledUnskilled;
