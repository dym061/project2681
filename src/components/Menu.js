import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Menu = () => {
	
	const menuData = {

		"lightmeals" : [
				{
					"name":"JA-CHAE JEON (V)",
					"desc":"Savoury pan-fried veg pancake served with 	special marinated soy sauce ",
					"price":"90"
				},
				{
					"name":"KIMCHI JEON (V)",
					"desc":"Savoury pan-fried kimchi pancake served with special marinated soy sauce",
					"price":"95"
				},
				{
					"name":"HAE-MUL JEON",
					"desc":"Savoury pan-fried squid, shrimp and veg pancake served with light soy dressing",
					"price":"110"
				},
				{
					"name":"KIMBAP - CLASSIC",
					"desc":"Roasted seaweed wrapped with rice, yellow pickled radish, carrot, egg, ham and spinach",
					"price":"95"
				},
				{
					"name":"KIMBAP - VEGAN (V)",
					"desc":"Roasted seaweed wrapped with rice, yellow  pickled radish, carrot, cucumber and spinach",
					"price":"85"
				},
				{
					"name":"MANDI-I - PORK/BEEF",
					"desc":"Pan-fried pork/beef dumplings served with a soy dipping sauce",
					"price":"80"
				},
				{
					"name":"MANDU - VEGETARIAN (V)",
					"desc":"Pan-fired vegetarian dumplings with a soy dipping sauce",
					"price":"75"
				},
				{
					"name":"TTEOKBOKKI - CLASSIC (V)",
					"desc":"Korean rice cake and shredded veg tossed with Korean chilli sauce",
					"price":"85"
				},
				{
					"name":"TTEOKBOKKI WITH CHEESE",
					"desc":"Korean rice cake and shredded veg tossed with Korean chilli sauce smothered with cheese",
					"price":"95"
				}
			],

		"beef" : [
				{
					"name":"BULGOGI ('bul-go-gi')",
					"desc":"Thinly sliced marinated beef in a blend of Korean spices, garlic and rich soy sauce served with steamed rice",
					"price":"165"
				},
				{
					"name":"BEEF & OYSTER SAUCE",
					"desc":"Sliced beef with mixed vegetables marinated in garlic & rich Oyster sauce served with steamed rice",
					"price":"155"
				},
				{
					"name":"BULGOGI BOKKEUM (S)",
					"desc":"Thinly sliced beef with mixed vegetables in a blend of Korean spices, garlic and chilli served with steamed rice",
					"price":"165"
				}
			],

		"pork" : [
				{
					"name":"JEYUK BULGOGI",
					"desc":"Thinly sliced marinated pork in a blend of Korean spices, garlic and rich soy sauce served with steamed rice",
					"price":"155"
				},
				{
					"name":"JEYUK BOKKEUM (S)",
					"desc":"Sliced pork with mixed vegetables in a blend of Korean spices, garlic and chilli served with steamed rice",
					"price":"155"
				},
				{
					"name":"PORK & OYSTER SAUCE",
					"desc":"Sliced pork with mixed vegetables marinated in garlic & Oyster sauce served with steamed rice",
					"price":"145"
				}
			],
			
		"veg" : [
				{
					"name":"JA-CHAE STIR FRY (V)",
					"desc":"Thinly sliced marinated pork in a blend of Korean spices, garlic and rich soy sauce served with steamed rice",
					"price":"130"
				},
				{
					"name":"JA-CHAE BOKKEUM (V) (S)",
					"desc":"Sliced pork with mixed vegetables in a blend of Korean spices, garlic and chilli served with steamed rice",
					"price":"130"
				}
			],

		"chicken": [
				{
					"name":"DAK BULGOGI",
					"desc":"Thinly sliced marinated chicken in a blend of Korean spices, garlic and rich soy sauce served with steamed rice",
					"price":"155"
				},
				{
					"name":"CHICKEN & OYSTER SAUCE",
					"desc":"Sliced chicken with mixed vegetables marinated in garlic & rich Oyster sauce served with steamed rice",
					"price":"145"
				},
				{
					"name":"DAK BOKKEUM (S)",
					"desc":"Chicken marinated in a Korean chilli paste stir fried with vegetables and served with steamed rice",
					"price":"155"
				},
				{
					"name":"DEEP-FRIED CHICKEN WINGS",
					"desc":"Korean deep fried chicken wings stir-fried with marinated vegetables and served with steamed rice",
					"price":"145"
				}
			]
		}	
	
	
	
  return (
    <>
      <Navbar/>
	  <h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Menu</h1>
		<section className="about con bgcol2">
			<div className="mxauto txtcol1 px5">
				<h1 className="txtcol1 txtfont2 h5 txtupper pt5 pl3">Light Meals</h1>
				<div className="m3">
					{menuData.lightmeals.map((item) => (
					<div key={item.name} className="m3">
						<p className="txtfont2 txtbold">{item.name}</p>
						<p className="txtfont1 pt2">{item.desc}</p>
						<p className="txtright txtfont1">{item.price}</p>
					</div>						  
					))}
				</div>
				
				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Beef</h1>
				<div className="m3">
					{menuData.beef.map((item) => (
					<div key={item.name} className="m3">
						<p className="txtfont2 txtbold">{item.name}</p>
						<p className="txtfont1 pt2">{item.desc}</p>
						<p className="txtright txtfont1">{item.price}</p>
					</div>						  
					))}
				</div>	
				
				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Pork (Ye-Yuk)</h1>
				<div className="m3">
					{menuData.pork.map((item) => (
					<div key={item.name} className="m3">
						<p className="txtfont2 txtbold">{item.name}</p>
						<p className="txtfont1 pt2">{item.desc}</p>
						<p className="txtright txtfont1">{item.price}</p>
					</div>						  
					))}
				</div>	

				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Vegetarian</h1>
				<div className="m3">
					{menuData.veg.map((item) => (
					<div key={item.name} className="m3">
						<p className="txtfont2 txtbold">{item.name}</p>
						<p className="txtfont1 pt2">{item.desc}</p>
						<p className="txtright txtfont1">{item.price}</p>
					</div>						  
					))}
				</div>	
				
				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Chicken</h1>
				<div className="m3">
					{menuData.chicken.map((item) => (
					<div key={item.name} className="m3">
						<p className="txtfont2 txtbold">{item.name}</p>
						<p className="txtfont1 pt2">{item.desc}</p>
						<p className="txtright txtfont1">{item.price}</p>
					</div>						  
					))}
				</div>	
					
				<div className="m3">
					<div className="m3">
						<p className="txtfont2 txtbold">KOREAN FRIED CHICKEN ("KFC")</p>
						<p>Deep fried chicken wings</p>
						<p className="txtfont1 pt2">Served with our famous soy dipping sauce</p>
						<p className="txtright txtfont1">115</p>
						<p className="txtfont1 pt2">Sweet and spicy</p>
						<p className="txtright txtfont1">125</p>
						<p className="txtfont1 pt2">Bulgogi</p> 
						<p className="txtright txtfont1">125</p>
					</div>
				</div>	
				
				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Japchae</h1>
				<div className="m3 txtfont1">
					<div className="m3">
						<p>Traditional stir-fried Korean glass noodles mixed with seasoned vegetables served with:</p>
						<p className="txtbold">Beef</p><p className="txtright txtfont1">160</p>
						<p className="txtbold">Chicken</p><p className="txtright txtfont1">155</p>
						<p className="txtbold">Pork</p><p className="txtright txtfont1">155</p>
						<p className="txtbold">Calamari</p><p className="txtright txtfont1">170</p>
						<p className="txtbold">Deep Fried Chicken Wings</p><p className="txtright txtfont1">170</p>
						<p className="txtbold">King Prawn </p><p className="txtright txtfont1">295</p>
						<p className="txtbold">Mixed Veg (V)</p><p className="txtright txtfont1">145</p>	
					</div>
				</div>
				
				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Seafood</h1>
				<div className="m3 txtfont1">
					<p>Served with steamed rice</p>
					<div className="m3">
						<p className="txtfont2 txtbold">KING PRAWN or CALAMARI STIR FRY </p>
						<p className="txtfont1 pt2">With stir-fried vegetables in garlic, soy and Korean spices served with steamed rice </p>
						<p className="txtright txtfont1">260 / 160</p>
					</div>	
					<div className="m3">
						<p className="txtfont2 txtbold">KING PRAWN or CALAMARI BOKKEUM (S) </p>
						<p className="txtfont1 pt2">With spicy stir-fried vegetables in garlic, soy and Korean spices served with steamed rice </p>
						<p className="txtright txtfont1">260 / 160 </p>
					</div>	
					<div className="m3">
						<p className="txtfont2 txtbold">KING PRAWN or CALAMARI & OYSTER SAUCE </p>
						<p className="txtfont1 pt2">With mixed vegetables marinated in garlic & rich Oyster sauce served with steamed rice </p>
						<p className="txtright txtfont1">260 / 160</p>
					</div>						
				</div>					

				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Bibimbap</h1>
				<div className="m3 txtfont1">
					<div className="m3">
						<p>Rice bowl and sautéed veg, glazed with red pepper paste and topped with a fried egg with your choice of:</p>
						<p className="txtbold">Beef Bulgogi</p><p className="txtright txtfont1">160</p>
						<p className="txtbold">Pork Bulgogi</p><p className="txtright txtfont1">150</p>
						<p className="txtbold">Chicken Bulgogi</p><p className="txtright txtfont1">150</p>
						<p className="txtbold">Calamari Bulgog</p><p className="txtright txtfont1">170</p>
						<p className="txtbold">Mixed Veg</p><p className="txtright txtfont1">140</p>
						<p className="txtbold">Kimchi Bokkeumbap</p><p className="txtright txtfont1">120</p>
					</div>
				</div>

				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Banchan</h1>
				<div className="m3 txtfont1">
					<p className="txtcol1 txtupper">AUTHENTIC KOREAN SIDE DISHES* </p>
					<div className="m3">
						<p className="txtfont2 txtbold">KIMCHI (V) (S)</p>
						<p className="txtfont1 pt2">Spicy fermented napa cabbage</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">KIMCHI (V) (S)</p>
						<p className="txtfont1 pt2">Spicy marinated cucumber</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">BUCHU KIMCHI (V) (S)</p>
						<p className="txtfont1 pt2">Spicy marinated chives</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">KKAKDUGI KIMCHI (V) (S)</p>
						<p className="txtfont1 pt2">Cubed radish kimchi</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">SIGEUMCHI NAMUL (V)</p>
						<p className="txtfont1 pt2">Sesame seasoned spinach</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">HOBAK BOKKEUM (V)</p> 
						<p className="txtfont1 pt2">Stir-fried zucchini</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">SUKJU NAMUL (V)</p>
						<p className="txtfont1 pt2">Seasoned bean sprouts</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">MU SAENGCHAE (V)</p>
						<p className="txtfont1 pt2">Spicy radish salad</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">GANJA BOKKEUM (V)</p>
						<p className="txtfont1 pt2">Stir-fried potatoes</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">GYEUAN MARI</p> 
						<p className="txtfont1 pt2">Korean rolled egg</p>
						<p className="txtright txtfont1">60</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">PAN FRIED TOFU (V)</p>
						<p className="txtfont1 pt2">with special soy sauce</p>
						<p className="txtright txtfont1">60</p>
					</div>	
					<p className="txtcol1 txtupper">*subject to availability</p>
				</div>

				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Fried Noodles</h1>
				<div className="m3 txtfont1">
					<div className="m3">
						<p>With your choice of:</p>
						<p className="txtbold">Beef</p><p className="txtright txtfont1">110</p>
						<p className="txtbold">Chicken</p><p className="txtright txtfont1">105</p>
						<p className="txtbold">Pork</p><p className="txtright txtfont1">105</p>
						<p className="txtbold">Calamari</p><p className="txtright txtfont1">130</p>
						<p className="txtbold">Mixed Veg (V)</p><p className="txtright txtfont1">100</p>
					</div>
				</div>

 				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Soup*</h1>
				<div className="m3 txtfont1">
					<p>Served with steamed rice</p>
					<div className="m3">
						<p className="txtfont2 txtbold">KIMCHI JJIGAE</p>
						<p className="txtfont1 pt2">Kimchi and pork stew</p>
						<p className="txtright txtfont1">100 / 150 </p>
					</div>	
					<div className="m3">
						<p className="txtfont2 txtbold">KIMCHI GUK (V) </p>
						<p className="txtfont1 pt2">Kimchi Soup</p>
						<p className="txtright txtfont1">80 / 120</p>
					</div>	
					<div className="m3">
						<p className="txtfont2 txtbold">DAKGAEJANG</p>
						<p className="txtfont1 pt2">Spicy chicken soup with vegetables</p>
						<p className="txtright txtfont1">100 / 150</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">YUKGAEJANG</p>
						<p className="txtfont1 pt2">Spicy beef soup with vegetables</p>
						<p className="txtright txtfont1">100 / 150</p>
					</div>	
					<div className="m3">
						<p className="txtfont2 txtbold">SOEGOGI-MUGUK </p>
						<p className="txtfont1 pt2">Beef radish soup </p>
						<p className="txtright txtfont1">100 / 150</p>
					</div>						
					<p>*subject to availability </p>
				</div>		
 
 				<h1 className="txtcol1 txtfont2 h5 txtupper pl3">Desserts</h1>
				<div className="m3">
					<div className="m3">
						<p className="txtfont2 txtbold">BANANA FRITTER </p>
						<p className="txtfont1 pt2">Deep fried banana served with ice cream and chocolate sauce </p>
						<p className="txtright txtfont1">75</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">ICE CREAM</p>
						<p className="txtfont1 pt2">3 scoops of vanilla or chocolate ice cream </p>
						<p className="txtright txtfont1">55</p>
					</div>
					<div className="m3">
						<p className="txtfont2 txtbold">DOM PEDRO</p>
						<p className="txtfont1 pt2">Drinking dessert, cocktail with an ice-cream base</p>
						<p className="txtright txtfont1">95</p>
					</div>
				</div>	

				<div className="m5 p5"></div>
			</div>
			<div className="m5"></div>
		</section>	
	  <Footer/>
	</>
  );
};

export default Menu;