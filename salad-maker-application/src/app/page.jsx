"use client"
import React, { useState } from "react";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Img } from "./components/Img";
export default function Home() {

  const [searchBarValue4, setSearchBarValue4] = useState("");
  return (
    <main>
      <div className="flex w-full items-start gap-10 bg-gray-100">
        <div className="flex flex-1 flex-col gap-8 py-12 md:py-5 sm:py-4">
          <div class="mr-10 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
            <h1 class=" sm:text-[28px] md:text-[30px] lg:text-[30px] text-[36px] font-bold !text-color-black md:p-5 undefined">
              Let's Create...your own salad!!!
            </h1>
          </div>
          </div>
        </div>
    </main>
  );
}
