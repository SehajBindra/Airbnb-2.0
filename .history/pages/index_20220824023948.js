import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import MediumCard from "../Components/MediumCard";
import SmallCard from "../Components/SmallCard";
import styles from "../styles/Home.module.css";

export default function Home({ exploreData, cardData }) {
  console.log(exploreData);
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

      <main className="max-w-7xl mx-auto px-1 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold  px-4 sm:p-0 pb-5">
            Explore Nearby
          </h2>

          <div className="flex text-center   items-center scrollbar-hide overflow-x-scroll sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold px-4 sm:p-0 py-8">
            Live Annywhere
          </h2>

          {cardData?.map((item) => (
            <MediumCard key={item.title} img={item.img} title={item.title} />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
