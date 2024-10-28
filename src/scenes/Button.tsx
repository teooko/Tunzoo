import React from 'react';

const Button = ({label}) => {
    return (
        <a href="#_"
           className="relative inline-flex items-center justify-start inline-block px-14 py-7 overflow-hidden font-bold rounded-full group"> {/* Increased px and py */}
            <span className="w-40 h-40 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span> {/* Increased width and height */}
            <span className="absolute top-0 left-0 w-60 h-60 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-0 bg-white opacity-100 group-hover:-translate-x-10"></span> {/* Adjusted to match the new size */}
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-2xl font-thin">{label}</span> {/* Added text-xl */}
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
    );
};

export default Button;