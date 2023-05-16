import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Yamayamaaya Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.jpg" alt="Your Name" />
        <h1>Yamayamaaya</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
