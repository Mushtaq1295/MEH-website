import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4">
        {/* Logo / Business Name */}
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Munna Engine House
        </h1>

        {/* Address & Contact Details */}
        <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
          📍 Plot No.64, Block No.9, 3rd Cross Rd, Auto Nagar, Vijayawada, Andhra Pradesh 520007 
          &nbsp;||&nbsp; 📞 9866200378
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
