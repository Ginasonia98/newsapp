import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-800 shadow-2xl font-bold py-4  bottom-0 w-full">
      <div className="container bg-white mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full sm:w-auto mb-3 sm:mb-0 sm:mr-4">
          <p className="text-sm">
            &copy; 2023 NewsCompany. All rights reserved.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <a href="#" className="mr-4">
            Privacy & Policy
          </a>
          <a href="#" >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
