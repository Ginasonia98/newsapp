import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import News from "./News";
import Button from "./Button";

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
      <Button />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
