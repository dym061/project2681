import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/contact.module.css";

const Contact = () => {
const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
// You can handle form submission logic here
console.log("Name: ", name);
console.log("Mobile Number: ", mobile);
console.log("Message: ", message);
};

return (
<>
	<Navbar />
	<h1 className="txtcol1 txtfont2 h4 txtupper txtcenter pb5">Contact Us</h1>
	<section className="con bgcol2 pb5">
		<div className="con p5">
			<div className="txtcol1 txtfont1">
				<p className="pb3">Please use the form below to contact us. We will get back to you as soon as possible.</p>
				<form onSubmit={handleSubmit}>
					<div className="pb3">
						<label className="pr3" htmlFor="name">Name:</label>
						<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="pb3">
						<label className="pr3" htmlFor="mobile">Mobile</label>
						<input
						type="text"
						id="mobile"
						name="mobile"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						/>
					</div>
					<div className="pb3">
						<label className="pr3" htmlFor="message">Message:</label>
						<textarea
						id="message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button className="btn1	" type="submit">Send Message</button>
				</form>
			</div>
		</div>
	</section>
	<Footer />
</>
);
};

export default Contact;