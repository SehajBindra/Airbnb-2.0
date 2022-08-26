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
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "omg",
    },
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
            <div className="flex  items-center px-2 space-x-10">
              {items.map((item) => (
                <div>
                  <img className="h-5 object-cover" src={item.src} alt="" />
                  <p> {item.name} </p>
                </div>
              ))}
            </div>

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
