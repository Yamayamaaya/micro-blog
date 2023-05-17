import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./compornents/Layout";
import utilsStyle from "@/styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilsStyle.headingMd}>
          <p>こんにちは！</p>
        </section>
        <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
          <h2>最近の投稿</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/posts/firstPost">
                <img
                  src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                  alt=""
                />
              </Link>
              <Link href="/posts/firstPost">
                <p className={utilsStyle.boldText}>これはテストの投稿</p>
              </Link>
              <br />
              <small className={utilsStyle.lightText}>2021-10-10</small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img
                  src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                  alt=""
                />
              </Link>
              <Link href="/posts/firstPost">
                <p className={utilsStyle.boldText}>これはテストの投稿</p>
              </Link>
              <br />
              <small className={utilsStyle.lightText}>2021-10-10</small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img
                  src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                  alt=""
                />
              </Link>
              <Link href="/posts/firstPost">
                <p className={utilsStyle.boldText}>これはテストの投稿</p>
              </Link>
              <br />
              <small className={utilsStyle.lightText}>2021-10-10</small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img
                  src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                  alt=""
                />
              </Link>
              <Link href="/posts/firstPost">
                <p className={utilsStyle.boldText}>これはテストの投稿</p>
              </Link>
              <br />
              <small className={utilsStyle.lightText}>2021-10-10</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
