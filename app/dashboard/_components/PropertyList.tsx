import { properties } from "@/lib/constant/properties";
import Link from "next/link";

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4">
      {properties.map((property, i) => (
        <Link key={i} href={`/dashboard/${property.id}`}>
          <div className="w-full h-[240px] rounded-lg shadow-sm bg-main dark:bg-dark-secondary"></div>
          <p className="text-stone-800 dark:text-stone-200 text-lg">
            {property.title}
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-sm">
            {property.location}
          </p>
          <p className="text-primary text-xl">
            ₱ {property.price_per_night_php} night
          </p>
        </Link>
      ))}
    </div>
  );
}
