import Image from "next/image";
import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/router";

function Header({ placeholder }) {
    useEffect(() => {
        router.prefetch('/search');
       }, []);
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noofGuests, setNoofGuests] = useState("1");

  const search = () => {

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noofGuests,
      },
    });
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const HandleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky z-50 shadow-md top-0 grid grid-cols-3 bg-white p-5 md:px-5">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className=" relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* center */}
      <div className=" flex  items-center flex-grow sm:border-2 sm:rounded-full p-3  sm:shadow-md ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" sm:pl-4 focus-within:outline-none bg-transparent flex items-center flex-grow text-gray-600 placeholder:text-gray-400"
          type="text"
          placeholder={placeholder || "Search Your dates"}
        />
        <MagnifyingGlassIcon className="hidden sm:inline h-8 w-8 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-2 ml-4 ">
        <p className="hidden sm:inline link ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          <img
            className="avatar h-6 w-6"
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/08/Ryan-Reynolds-in-Deadpool.jpg"
            alt=""
          />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mt-5 sm:mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={HandleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">Nearby Guests</h2>
            <UsersIcon className="h-6" />
            <input
              value={noofGuests}
              onChange={(e) => setNoofGuests(e.target.value)}
              min={1}
              max={32}
              className="w-12 pl-2 text-lg focus-within:outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
