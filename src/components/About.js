import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/about.module.css";

const About = () => {
return (
	<>
		<Navbar />
		
		<h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">About</h1>
		
		<section className="about con">
			
		
			<div className="dflex dflexm bgcol2">
				<div className="txtcol1 txtfont1 px5">
					<p className="pt5 w100 px5m ">Seoul Food is a Korean restaurant located in Swakopmund, Namibia. The menu is filled with a variety of dishes that are sure to transport diners to the streets of Seoul. The warm and welcoming atmosphere of Seoul Food creates a sense of family, making it the perfect place for both Korean food aficionados and those trying it for the first time. The restaurant is owned and operated by the Yu family, including Seong Yu, who previously owned Seoul House in Ausspannplatz from 1986 to 1996.</p>
					
					<p  className="pt5 px5m  pb5">Despite having been open for only a month, Seoul Food has already received rave reviews on Instagram. The restaurant has become a unique player in Swakopmund's food scene, with its succulent yangnyeom chicken, bestselling beef bulgogi, and spicy jeyuk bokkeum being particularly popular. Korean cuisine is different from Chinese cuisine, and Seoul Food hopes to introduce Namibians to new flavour profiles and bring diversity to the culinary landscape.</p>	
				</div>
				<img className="shadow1 w40p w100pm" src="/images/store1.png" alt="Seoul Food restaurant" />
			</div>
			
			<div className="m5"></div>
			
			<div className="dflex dflexm bgcol2 pb5 mb5">
				<img className="shadow1 w20p shadow1 gray w100pm" src="/images/store2.png" alt="Seoul Food restaurant" />

				<div className="txtcol1 txtfont1 w100p px5">
					<p className="pt5 px5m ">The restaurant has expanded its operation to Windhoek due to popular demand. The fluffy steamed rice, pillowy mandu, and complex flavours of Seoul Food's dishes are generously served, delicious, and ensure repeat business. Overall, Seoul Food is a must-do for anyone looking for a delectable blast from the past, a wholesome family business, and a unique culinary experience in Namibia.</p>
					
					<p  className="pt5 px5m ">While the lack of locally available ingredients prevents Seoul Food from offering a full range of Korea's traditional side dishes (banchan), the restaurant still has plenty to offer to introduce Namibians to the food culture of South Korea. The dishes are considered healthier eating habits, with many containing probiotics, such as the kimchi, which is good for diners. Seong Yu, who is originally from Gangnam in Seoul, hopes to allow even more Namibians a chance to experience Korean cuisine and try more dishes and flavours in the future.</p>	
				</div>
			</div>						
		</section>
		<Footer />
	</>
	);
};

export default About;









