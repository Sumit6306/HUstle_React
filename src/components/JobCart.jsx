import React from "react";
import downloadImage from '../assets/download.jpg';

function JobCart({ title, description, location, salary, type }) {
    return(
<>
<div className="bg-white shadow-lg rounded-lg p-4 m-4 hover:shadow-xl transition-shadow">
            <div className="mb-4">
            <img
                  src={downloadImage}
                  alt={title}
                   className="w-full h-40 object-cover rounded-lg"
/>            </div>

            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex justify-between mt-4">
                <p className="text-sm text-gray-500">{location}</p>
                <p className="text-lg font-semibold text-green-600">₹{salary}/month</p>
            </div>

            <span
                className={`mt-4 px-4 py-2 rounded-full text-white ${
                    type === 'Skilled' ? 'bg-blue-600' : 'bg-yellow-600'
                }`}
            >
                {type}
            </span>
        </div>






</>
    )
}
    
export default JobCart;