import Logo from "@/asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import Marquee from "../Marquee";

const Navber = () => {
  return (
    <div className="w-full">
      <div className="max-lg:collapse w-full rounded-md max-w-7xl mx-auto">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start w-auto lg:w-1/2">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* navber start */}
          </div>
          <div className="navbar-center ">
            <Image
              src={Logo}
              width={200}
              height={90}
              alt="logo"
              loading="eager"
              className="h-full w-full object-contain max-w-40 lg:max-w-7/10"
            />
          </div>
          <div className="navbar-end gap-5">
            <Link href="/singin" className="btn bg-[#DC2626] text-white">
              Log in
            </Link>
            <Link href="/singup" className="btn btn-outline border-[#DC2626] text-[#DC2626]">
              Sign up
            </Link>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu border-b-base-300">
            <NavLink />
          </ul>
        </div>
      </div>
      <div className="bg-[#293040] hidden lg:flex text-white">
        <div className="max-w-7xl mx-auto w-full">
          <ul className="menu menu-horizontal p-0 ">
            <NavLink />
          </ul>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Navber;
