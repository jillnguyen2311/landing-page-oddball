import styles from "@/styles/Nav.module.css"
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {

    const [isMenuActive, setIsMenuActive] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector(`.${styles.hamburger}`);
        const navMenu = document.querySelector(`.${styles.navmenu}`);
        const navLink = document.querySelectorAll(`.${styles.navlink}`);

        const mobileMenu = () => {
            setIsMenuActive(!isMenuActive);
        };

        const closeMenu = () => {
            setIsMenuActive(false);
        };

        hamburger!.addEventListener("click", mobileMenu);
        navLink.forEach((n) => n.addEventListener("click", closeMenu));

        return () => {
            hamburger!.removeEventListener("click", mobileMenu);
            navLink.forEach((n) => n.removeEventListener("click", closeMenu));
        };
    }, [isMenuActive]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <a href="/">
                <Image className={styles.space} src="/images/OddBall.png" alt="logo" width={150} height={150} />
                </a>
                <ul className={`${styles.navmenu} ${isMenuActive ? styles.active : ''}`}>
                    <li className={styles.navitem}>
                        <a href="/" className={styles.navlink}>Live Games</a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="/" className={styles.navlink}>Latest News</a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="/" className={styles.navlink}>Stats & Odds</a>
                    </li>
                    <li className={styles.signup}>
                        <a href="/" className={styles.navlink}>Sign Up</a>
                    </li>
                </ul>
                <div className={`${styles.hamburger} ${isMenuActive ? styles.active : ''}`}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
        </nav>
    )
}
