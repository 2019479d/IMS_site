import About from "@/components/about";
import Application from "@/components/application";
import Bannner from "@/components/banner";
import Partner from "@/components/partner";
import Product from "@/components/product";
import Service from "@/components/service";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Bannner />
      <About />
      <Application/>
      <Service />
      <hr className="w-[80%] h-1 mx-auto" />
      <Product />
      <Partner />
    </main>
  );
};

export default Home;
