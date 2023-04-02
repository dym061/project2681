import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	
  const [isOpen, setIsOpen] = useState(false);
  const [isBars, setIsBars] = useState(false);
  const [isX, setIsX] = useState(false); 
  
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIcon = () => {
	setIsBars(!isBars);
	setIsX(!isX);
  };

  
  const router = useRouter();

  return (
    <section>
      <div className="con">
        <nav className={styles.navbar}>
          <img src="/images/logo.png" alt="Seolfood Logo" className={styles.navbar__logo} />
          <ul className={`${styles.navbar__links} ${isOpen ? styles.active : ""}`}>
            <li className={`${styles.navbar__link} ${router.pathname === "/" ? styles.active : ""}`}>
              <Link className="txtfont2 txtupper" href="/">
                Home
                <div className="txtfont3 txtcenter">홈</div>
              </Link>
            </li>
            <li className={`${styles.navbar__link} ${router.pathname === "/about" ? styles.active : ""}`}>
              <Link className="txtfont2 txtupper" href="/about">
                About
                <div className="txtfont3 txtcenter">소개</div>
              </Link>
            </li>
            <li className={`${styles.navbar__link} ${router.pathname === "/menu" ? styles.active : ""}`}>
              <Link className="txtfont2 txtupper" href="/menu">
                Menu
                <div className="txtfont3 txtcenter">메뉴</div>
              </Link>
            </li>
            <li className={`${styles.navbar__link} ${router.pathname === "/gallery" ? styles.active : ""}`}>
              <Link className="txtfont2 txtupper" href="/gallery">
                Gallery
                <div className="txtfont3 txtcenter">갤러리</div>
              </Link>
            </li>
            <li className={`${styles.navbar__link} ${router.pathname === "/contact" ? styles.active : ""}`}>
              <Link className="txtfont2 txtupper" href="/contact">
                Contact
                <div className=" txtfont3 txtcenter">연락처</div>
              </Link>
            </li>
          </ul>
		  <div className={`${styles["open__close"]} ${isOpen ? styles["open__close--active"] : ""}`} onClick={handleToggle}>
		    <FontAwesomeIcon className={`${styles["open__close_bars"]} ${isBars ? styles["open__close_bars--active"] : ""}`} onClick={handleIcon} icon={faBars} /> 
		    <FontAwesomeIcon className={`${styles["open__close_x"]} ${isX? styles["open__close_x--active"] : ""}`} onClick={handleIcon} icon={faX} />
		  </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;