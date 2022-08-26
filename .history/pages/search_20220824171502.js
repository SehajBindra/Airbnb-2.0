import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300 stays 5 guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">stays in Mars</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
