import { format } from "date-fns";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import Maps from "../Components/Maps";
import Map from "../Components/Maps";

function Search({ SearchResults }) {
  console.log(SearchResults);
  const router = useRouter();
  const { location, startDate, endDate, noofGuests } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatStartDate}- ${formatEndDate}`;
  return (
    <>
      <Head>
        <title>
          {location}- {range}
        </title>
      </Head>
      <div className="">
        <Header placeholder={`${location} | ${range} | ${noofGuests} guests`} />
        <main className="flex  ">
          <section className="flex-grow px-6 pt-16">
            <p className="text-xs">
              300+ stays for {range} - {noofGuests} number of Guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 whitespace-nowrap space-x-3 text-gray-800">
              <p className="btn2">Cancellation Flexibility</p>
              <p className="btn2">Types of Place</p>
              <p className="btn2">Price</p>
              <p className="btn2">Rooms and Beds</p>
              <p className="btn2">More Filters</p>
            </div>
            <div>
              {SearchResults?.map(
                ({ img, location, title, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    title={title}
                    location={location}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
            <div className="py-4 px-8 items-center rounded-xl w-[25rem] h-[25rem] scrollbar-hide overflow-x-hidden lg:hidden">
              <Maps SearchResults={SearchResults} />
            </div>
          </section>

          <section className="hidden lg:inline-flex lg:w-[40rem] ">
            <Maps SearchResults={SearchResults} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const SearchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      SearchResults,
    },
  };
}
