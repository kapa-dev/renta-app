import DarkModeSwitch from "@/app/_components/DarkModeSwitch";
import PropertyTypeSelect from "@/app/dashboard/_components/PropertyTypeSelect";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <div className="bg-[#FFF] dark:bg-dark-primary">
      {/* <section className="border-b-[1px] border-dark-secondary dark:border-secondary py-2">
        <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <DarkModeSwitch />
              <input
                type="search"
                className="appearance-none outline-none rounded-full border-[1px] border-[#AAA] dark:border-dark-secondary shadow-lg bg-white dark:bg-dark-secondary px-3 py-1 text-dark-primary dark:text-secondary"
              />
            </div>
            {session?.user ? (
              <div className="flex items-center gap-x-2">
                {session?.user?.image && session?.user?.name && (
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  ></Image>
                )}
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button type="submit" className="text-primary">
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <Link href="/api/auth/signin" className="text-primary">
                Sign In
              </Link>
            )}
          </div>
          <PropertyTypeSelect />
        </div>
      </section> */}
      {children}
    </div>
  );
}
