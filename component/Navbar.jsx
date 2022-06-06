import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            alt=""
            width="32px"
            height="32px"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>01834 66 04 07</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/images/logo.png"
            alt="logo"
            width="160px"
            height="69px"
          />

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.png" alt="logo" width="30px" height="30px" />
          <div className={styles.cartCounter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
