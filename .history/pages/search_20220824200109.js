import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { HomeModernIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import TabSection from "../Components/TabSection";

function Search() {
  return (
    <>
      <div className="">
        <Header />
        <main className="flex overflow-x-scroll scrollbar-hide  ">
          <section>
            <p className="text-xs">300 stays 5 guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">stays in Mars</h1>
            <div className="hidden lg:inline-flex">
              <p className="btn2">Cancellation Flexibility</p>
              <p className="btn2">Types of Place</p>
              <p className="btn2">Price</p>
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
