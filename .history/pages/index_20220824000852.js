import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
  );
}
