import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Search() {
  return (
    <>
      <div className="">
        <Header />
        <main className="flex  ">
          <section>
            <p className="text-xs">300 stays 5 guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">stays in Mars</h1>
            <div className="hidden lg:inline-flex mb-5 whitespace-nowrap space-x-3 text-gray-800">
              <p className="btn2">Cancellation Flexibility</p>
              <p className="btn2">Types of Place</p>
              <p className="btn2">Price</p>
              <p className="btn2">Rooms and Beds</p>
              <p className="btn2">More Filters</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Search;
