"use client";

import { getaways } from "@/lib/constant/getaways";
import { supportMenus } from "@/lib/constant/supportMenus";
import { hostingMenus } from "@/lib/constant/hostingMenus";
import { airbnbMenus } from "@/lib/constant/airbnbMenus";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer({}) {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const items =
    getaways.find((getaway) => getaway.category === selectedCategory)?.items ||
    [];

  return (
    <section className="bg-minor dark:bg-dark-primary pt-12">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <h1 className="text-xl dark:text-secondary">
          Inspiration for future getaways
        </h1>
        <div className="flex flex-nowrap gap-x-4 pt-4 border-b-[1px] border-[#DDDDDD] dark:border-dark-secondary">
          {getaways.map((getaway, i) => (
            <div
              className={`${
                selectedCategory === getaway.category
                  ? "text-primary border-b-[1px] border-primary"
                  : "text-main text-main"
              } pb-4`}
              key={i}
              onClick={() => setSelectedCategory(getaway.category)}
            >
              {getaway.category}
            </div>
          ))}
        </div>
        <div className="flex gap-x-10 gap-y-5 pt-8 pb-12 border-b-[1px] border-[#DDDDDD] dark:border-dark-secondary">
          {items.map((item, i) => (
            <Link href={`/${item.title}`} className="flex flex-col" key={i}>
              <span className="text-dark-primary dark:text-minor">
                {item.title}
              </span>
              <span className="text-main dark:text-main">{item.subtitle}</span>
            </Link>
          ))}
        </div>
        <div className="flex pt-8 pb-12 border-b-[1px] border-[#DDDDDD] dark:border-dark-secondary">
          <div className="w-[30%] flex flex-col text-dark-secondary dark:text-secondary">
            <p className="text-lg font-bold mb-2">Support</p>
            {supportMenus.map((menu, i) => (
              <Link href={menu.url} key={i}>
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="w-[30%] flex flex-col text-dark-secondary dark:text-secondary">
            <p className="text-lg font-bold mb-2">Hosting</p>
            {hostingMenus.map((menu, i) => (
              <Link href={menu.url} key={i}>
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="w-[30%] flex flex-col text-dark-secondary dark:text-secondary">
            <p className="text-lg font-bold mb-2">Airbnb</p>
            {airbnbMenus.map((menu, i) => (
              <Link href={menu.url} key={i}>
                {menu.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex py-6">
          <p className="text-dark-secondary dark:text-secondary">
            &copy; 2024 Renta
          </p>
        </div>
      </div>
    </section>
  );
}
