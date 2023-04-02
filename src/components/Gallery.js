import React from "react";
import Image from 'next/image'
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/gallery.module.css";
import stuff from "../styles/scroll.module.css";

const Gallery = () => {

  const gallery = {
    "data" : [ 
      {"code":"1001","src":"/gallery/01.png"},
      {"code":"1002","src":"/gallery/02.png"},
      {"code":"1003","src":"/gallery/03.png"},
      {"code":"1004","src":"/gallery/04.png"},
      {"code":"1005","src":"/gallery/05.png"},
      {"code":"1006","src":"/gallery/06.png"},
      {"code":"1007","src":"/gallery/07.png"},
      {"code":"1008","src":"/gallery/08.png"},
      {"code":"1009","src":"/gallery/09.png"},
      {"code":"1010","src":"/gallery/10.png"},
      {"code":"1011","src":"/gallery/11.png"},
      {"code":"1012","src":"/gallery/12.png"},
      {"code":"1013","src":"/gallery/13.png"},
      {"code":"1014","src":"/gallery/14.png"},
      {"code":"1015","src":"/gallery/15.png"},
      {"code":"1016","src":"/gallery/16.png"},
      {"code":"1017","src":"/gallery/17.png"},
      {"code":"1018","src":"/gallery/18.png"},
    ]
  }

  return (
    <>
      <Navbar/>
	  <h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Gallery</h1>
      <section className="con bgcol2 pb5 pt3">
        <div className="dgrid grid4 grid4m pb5">
          {gallery.data.map((item) => (
            <div className="hcenterm" key={item.code}>
              <Image
                className="m3 shadow1 w100pm2 h100pm2 "
                src={item.src}
                alt="Dish Display"
                width={250}
                height={250}
              />     
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Gallery;