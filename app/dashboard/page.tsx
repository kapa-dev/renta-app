import { Metadata } from "next";
import PropertyList from "@/app/dashboard/_components/PropertyList";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <section className="w-full h-full bg-[#F9F9FB] dark:bg-dark-primary">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <PropertyList />
      </div>
    </section>
  );
}
