import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "../components/News";
import Button from "../components/Button"

const Home = () => {
  return (
    <>
      <div>
      <Navbar />
      </div>
      <div className="mt-20">
        <div className="container mx-auto mb-20">
        <News />
        </div>
      </div>
      <Button/>
      <div className="mt-5">
        <Footer/>
      </div>
    </>
  );
};

export default Home;
