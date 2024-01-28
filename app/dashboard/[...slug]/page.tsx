import Image from "next/image";
import defaultThumbnail from "@/public/img/placeholder.webp";
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug, "slug");

  const property = {
    id: 1,
    title: "Luxurious Beachfront Villa",
    subtitle: "Entire cabin in Bayan ng Silang, Philippines",
    location: "Boracay, Philippines",
    max_capacity: 10,
    num_bedrooms: 5,
    num_beds: 8,
    num_bathrooms: 5,
    price_per_night_php: 15000,

    hosted_by: "Vivian",
    duration_of_hosting: "4 years",
    description:
      "The Log Cabin is nestled in the rolling hills of Sitio Lipahan. Sharing the same climate and scenery of Tagaytay, it is a great place to hang out with friends and family. Have the entire cabin to yourself! This includes a private pool, garden, al fresco dining area, and billiards hall. Relax and enjoy in the beautiful Cavite countryside!",
  };

  return (
    <section className="max-w-[1280px] mx-auto p-4 xl:px-0">
      <div className="flex justify-between mb-2 text-dark-primary dark:text-secondary">
        <h1 className="text-xl">{property.title}</h1>
        <div className="flex gap-x-2">
          <button>Share</button>
          <button>Like</button>
        </div>
      </div>

      <div className="md:hidden">
        <picture className="relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2">
        <picture className="col-span-2 row-span-2 relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center rounded-l-md"
          />
        </picture>
        <picture className="relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <picture className="relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center rounded-tr-md"
          />
        </picture>
        <picture className="relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <picture className="relative rounded-lg shadow-sm bg-main dark:bg-dark-secondary">
          <Image
            alt={property.title}
            src={defaultThumbnail}
            className="w-full h-full object-cover object-center rounded-br-md"
          />
        </picture>
      </div>

      <div className="flex justify-between mt-4">
        <div className="w-3/4 flex flex-col text-dark-primary dark:text-secondary">
          <h2 className="text-lg">{property.subtitle}</h2>
          <div className="flex gap-x-2">
            <p className="text-sm">{`${property.max_capacity} guests | ${property.num_bedrooms} bedrooms | ${property.num_beds} beds | ${property.num_bathrooms} baths`}</p>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </section>
  );
}
