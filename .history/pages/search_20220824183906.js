import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { HomeModernIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import TabSection from "../Components/TabSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  let [categories] = useState({
    Omg: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    NationalParks: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    TinyHomes: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const Icons = [
    {
      src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      name: "Tiny homes",
    },
    {
      src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      name: "cABIN",
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

            <div className="w-full  px-2  sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-3 rounded-full b-2  p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-full py-2.5 text-sm font-medium leading-5 text-black shadow-md px-2",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-200 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-gray-500  hover:text-black"
                        )
                      }
                    >
                      <div className="flex  items-center">
                        {Icons.map((Icon) => (
                          <>
                            <TabSection key={Icon.src} src={Icon.src} />
                          </>
                        ))}
                      </div>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {post.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                              <li>{post.date}</li>
                              <li>&middot;</li>
                              <li>{post.commentCount} comments</li>
                              <li>&middot;</li>
                              <li>{post.shareCount} shares</li>
                              <li></li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
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
