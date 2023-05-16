import Head from "next/head";
import styles from "./Layout.module.css";
import utilsStyles from "@/styles/utils.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yamayamaaya Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          className={utilsStyles.borderCircle}
          src="/images/profile.jpg"
          alt="Your Name"
          width={144}
          height={144}
        />
        <h1 className={utilsStyles.heading2Xl}>Yamayamaaya</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
