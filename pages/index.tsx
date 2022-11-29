import type { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/banner";
import Header from "../components/header";

import SmallCard from "../components/small-card";
import MediumCard from "../components/medium-card";
import LargeCard from "../components/large-card";
import Footer from "../components/footer";

const Home: NextPage = ({ smallCardsData, mediumCardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* SmallCard */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCardsData.map((item, index) => {
              return <SmallCard key={index} item={item} />;
            })}
          </div>
        </section>

        {/* MediumCard */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCardsData.map((item, index) => {
              return <MediumCard key={index} item={item} />;
            })}
          </div>
        </section>

        {/* LargeCard */}
        <section>
          <div className="relative py-16 cursor-pointer">
            <LargeCard
              img={"https://links.papareact.com/4cj"}
              title="The Greatest Outdoors"
              description="Wishlists curated by Airbnb"
              buttonText="Get Inspired"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const smallCardsData = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) => res.json());
  const mediumCardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) => res.json());

  return {
    props: {
      smallCardsData,
      mediumCardsData,
    },
  };
}
