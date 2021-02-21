import Head from "next/head";

import HeaderComponent from "../components/Header";
import LinkCard from "../components/LinkCard";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-100">
      <HeaderComponent />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main class="w-full">
          <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <LinkCard
              link={{
                name: "Hello",
                url: "https://ericjiang.dev",
              }}
            />
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
