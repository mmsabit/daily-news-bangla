import { Navtype } from "@/type/NewsType";
import Link from "next/link";

const NavLink = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navItems = data.data.filter((n: Navtype) => n.scrapable);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <li>
        <Link href="/" className="p-4 rounded-none hover:bg-[#DC2626]">
          হোম
        </Link>
      </li>
      {navItems.map((n: Navtype) => (
        <li key={n.topicId}>
          <Link
            href={`/category/${n.slug}`}
            className="p-4 w-full rounded-none hover:bg-[#DC2626]"
          >
            {n.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLink;
