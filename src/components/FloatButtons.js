import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styles from "../styles/float.module.css";

const FloatButtons = () => {
  const handlePhoneWindhoek = () => {
    window.open("tel:0812713996");
  };	
	
  const handlePhoneSwakop = () => {
    window.open("tel:0817742464");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100070897514678");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/seoulfoodnam");
  };

  return (
    <div className={styles.float_container}>
      <div className={styles.float_buttons}>
        <button
          className={`${styles.float_button} ${styles.float_phone}`}
          onClick={handlePhoneWindhoek}
		  title="Windhoek"
        >
          <AiFillPhone />
        </button>	  
        <button
          className={`${styles.float_button} ${styles.float_phone}`}
          onClick={handlePhoneSwakop}
		  title="Swakopmund"
        >
          <AiFillPhone />
        </button>
        <button
          className={`${styles.float_button} ${styles.float_facebook}`}
          onClick={handleFacebookClick}
        >
          <BsFacebook />
        </button>
        <button
          className={`${styles.float_button} ${styles.float_instagram}`}
          onClick={handleInstagramClick}
        >
          <BsInstagram />
        </button>
      </div>
    </div>
  );
};

export default FloatButtons;
