"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const NavInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="navbar-end gap-5 ">
      {user ? (
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <BsPersonCircle size={25} />
            {user?.name}
          </div>
          <button
            onClick={handleSignOut}
            className="btn bg-[#DC2626] text-white"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link href="/signin" className="btn bg-[#DC2626] text-white">
            Log in
          </Link>
          <Link
            href="/signup"
            className="btn btn-outline border-[#DC2626] text-[#DC2626]"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavInfo;
