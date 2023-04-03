import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";
import Image from "next/image";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <Navbar/>
	  <h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Welcome to SEOUL FOOD</h1>
      <section className="home">
        <Image
		  className="mb5 bgcover"
		  layout="responsive"
          src="/images/cover2.jpg"
          alt="Cover Image"
          
          width={1920}
          height={533}
        />
      </section>	
	  <FloatButtons />
	  <Footer />
	</>
  );
};

export default Home;