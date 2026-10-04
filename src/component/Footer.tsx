import Logo from "@/asset/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-[#293040] mt-20 py-15'>
            <div className="lg:max-w-7xl max-w-9/10 w-full mx-auto flex gap-6 items-center">
            <div className="w-full">
                <Image
              src={Logo}
              width={200}
              height={90}
              alt="logo"
              loading="eager"
              className="h-full max-w-full object-contain w-60 lg:max-w-7/10"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            </div>
            <div className="w-full">
                <p className="text-[#BEC6E0] text-[12px] text-center">This is a practice project by &nbsp;
                     <Link href="https://github.com/mmsabit" className="text-[#DC2626] hover:underline">
                     M M Sabit
                    </Link> <br />
                all data collected from &nbsp;
                <Link href="https://www.bbc.com/bengali" className="text-[#DC2626] hover:underline">
                     BBC Bangla news
                    </Link>
                </p>
            </div>
            <div className="w-full text-[#BEC6E0] text-[12px]  gap-5 flex justify-end">
                <Link
                href={`/`}
                className="hover:text-[#DC2626]"
                >
                Privacy policy
                </Link>
                <Link
                href={`/`}
                className="hover:text-[#DC2626]"
                >
                Terms & Condition
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Footer;