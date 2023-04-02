import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <Navbar/>
	  <h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Welcome to SEOUL FOOD</h1>
      <section className="con bgcol2 home">
        <Image
		  className="p5 pb5 mb5"
          src="/images/cover.png"
          alt="Cover Image"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </section>	
	  <Footer/>
	</>
  );
};

export default Home;
