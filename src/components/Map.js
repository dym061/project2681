import React from "react";
import styles from "../styles/map.module.css";

const Map = () => {
  return ( 
    <>
			
			<section className="con bgcol2 pr5 pl5 pb5 mb5">
			<h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Come find Us</h1>
			<h1 className="txtcol1 txtfont2 h5 txtupper  txtcenter">Windhoek</h1>
			<div className="m2">
				<iframe className='map' src='https://maps.google.com/maps?q=-22.55301166898751,17.087454653111525&hl=en&z=16&amp;output=embed'></iframe>
			</div>
			<h1 className="txtcol1 txtfont2 h5 txtupper txtcenter pt3 mb2">Swakopmund</h1>
			<div className="">
				<iframe className='map' src='https://maps.google.com/maps?q=-22.677221142208634,14.528811223032806&hl=en&z=16&amp;output=embed'></iframe>
			</div>
			</section>
			
	</>
  );
};

export default Map;
