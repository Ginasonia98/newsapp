import React, { useState,useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { googleSignIn, user } = UserAuth();
  const [isXlScreen, setIsXlScreen] = useState(false);

  let Links = [
    { name: "HOME" },
    { name: "SERVICE" },
    { name: "ABOUT" },
    { name: "NEWS" },
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

  const handleScreenSizeChange = (matches) => {
    setIsXlScreen(matches);
  };

  useEffect(() => {
    const xlScreenMediaQuery = window.matchMedia("(min-width: 1280px)");
    xlScreenMediaQuery.addListener(handleScreenSizeChange);
    setIsXlScreen(xlScreenMediaQuery.matches);

    return () => {
      xlScreenMediaQuery.removeListener(handleScreenSizeChange);
    };
  }, []);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
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
          <>
            {user ? (
              <p className=" text-gray-800 font-[Poppins] py-2 px-6 rounded md:ml-8 duration-500">
                {user.displayName}
              </p>
            ) : (
              <button
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-800 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleGoogleSignIn}
              >
                Login
              </button>
            )}
            {user && (
              <button
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-800 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleSignOut}
              >
                Logout
              </button>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
