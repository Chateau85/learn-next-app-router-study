// /components/page.jsx <- 진입 안됨

import Link from "next/link";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
    return (
        <div>
            <Link href="/" className={styles.link}>홈</Link> | 
            <Link href="/cart" className={styles.link}>장바구니</Link>
        </div>
    );
}