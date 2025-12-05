import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        لیگ کلش رویال
      </Link>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          خانه
        </Link>
        <Link href="/signup" className={styles.navItem}>
          ثبت نام
        </Link>
      </nav>
    </header>
  );
}
