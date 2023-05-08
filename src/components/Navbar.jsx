import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { googleSignIn, user } = UserAuth();

  let Links = [
    { name: "Home" },
    { name: "Service" },
    { name: "About" },
    { name: "News" },
  ];
  let [open, setOpen] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // sign out the user
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="w-full fixed top-0 left-0 font-bold">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <div className="text-indigo-600">HotNews</div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:mx-4  md:my-0 my-7">
              <div className="text-gray-800 duration-500">{link.name}</div>
            </li>
          ))}
          <div>
              {user ? (
                <p className="text-gray-800 font-bold text-sm">
                  {user.displayName}
                </p>
              ) : (
                <button
                  className=" text-gray-800 font-bold  focus:ring-4 focus:ring-purple-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                  onClick={handleGoogleSignIn}
                >
                  Log in
                </button>
              )}
            </div>
            <div>
              <button
                className="text-gray-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
