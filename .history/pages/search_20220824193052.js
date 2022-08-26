import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { HomeModernIcon, UserCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  const items = [
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
  ];
  return (
    <>
      <div className="h-screen">
        <Header />
        <main className="flex">
          <section>
            <p className="text-xs">300 stays 5 guests</p>

            <h1 className="text-3xl font-semibold mt-2 mb-6">stays in Mars</h1>

            <div className="hidden lg:inline-flex">
              <p className="btn2">Cancellation Flexibility</p>
              <p className="btn2">Types of Place</p>
              <p className="btn2">Price</p>
              <p className="btn2">More Filters</p>
            </div>

            <div className="w-full  px-2 py-16 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-3 rounded-full b-2  p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-30 rounded-full py-2.5 text-sm font-medium leading-5 text-black shadow-md px-2",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-200 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <p>
                      {" "}
                      {items.map((item) => (
                        <div>
                          <img
                            className="h-5 object-cover"
                            src={item.src}
                            alt=""
                          />
                          <p> {item.name} </p>
                        </div>
                      ))}{" "}
                    </p>
                  </Tab>
                </Tab.List>
              </Tab.Group>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Search;
