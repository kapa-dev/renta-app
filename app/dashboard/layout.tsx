import DarkModeSwitch from "@/app/_components/DarkModeSwitch";
import PropertyTypeSelect from "@/app/dashboard/_components/PropertyTypeSelect";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#FFF] dark:bg-dark-primary">
      <div className="border-b-[1px] border-dark-secondary dark:border-secondary py-2">
        <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
          <div className="flex justify-between items-center">
            <input
              type="search"
              className="appearance-none outline-none rounded-full border-[1px] border-[#AAA] dark:border-dark-secondary shadow-lg bg-white dark:bg-dark-secondary px-3 py-1 text-dark-primary dark:text-secondary"
            />
            <DarkModeSwitch />
          </div>
          <PropertyTypeSelect />
        </div>
      </div>
      {children}
    </section>
  );
}
