import Head from "next/head";

import HeaderComponent from "../components/Header";
import LinkCard from "../components/LinkCard";
import links from "../config/links";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderComponent />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full bg-white">
          <div className="max-w-7xl mx-auto p-4">
            {links.map((link, i) => {
              return <LinkCard link={link} key={i} />;
            })}
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  );
}
