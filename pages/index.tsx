import Head from "next/head";

import Footer from "../components/Footer";
import HeaderComponent from "../components/Header";
import LinkCard from "../components/LinkCard";
import about from "../config/about";

import links from "../config/links";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <div className="flex-1">
        <Head>
          <title>{`${
            process.env.NODE_ENV != "production" && "[DEV]"
          }Landing Page for ${about.me.name}`}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full bg-white flex-1">
          <div className="max-w-5xl mx-auto p-4">
            {links.map((link, i) => {
              return <LinkCard link={link} key={i} />;
            })}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
