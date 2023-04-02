import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;

  return (
    <footer className={styles.footer}>
      <div className="con ">
        <p className="txtfont txtcol1 ">
          © {startYear} - {currentYear} Seoul Food | All rights reserved
        </p>
       <Link href="" className={styles.footer__link}>
		  <span>Designed by </span><span className={styles.bw}>CiestoMedia</span>
       </Link>		
      </div>
    </footer>
  );
};

export default Footer;
