import React from "react";
import styles from "./header.module.scss"

import logoImg from "../../assets/images/logo@2x.png"

const Header = ({isFooter}) => {
    const wrapperStyle = isFooter ? styles.footerWrapper : styles.headerWrapper;
    return(
        <div className={wrapperStyle}>
            <img className={styles.logo} src={logoImg} alt="logo" />
            <div className={styles.list}>
                <a className={styles.twitter}></a>
                <a className={styles.telegram}></a>
                <a className={styles.medium}></a>
                <a className={styles.litepaper}></a>
            </div>
        </div>
    )
}

export default Header;