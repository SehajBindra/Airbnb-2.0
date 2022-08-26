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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
