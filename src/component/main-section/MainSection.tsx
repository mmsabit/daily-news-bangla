import { ArticleType, MainNewsType } from "@/type/NewsType";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";

const MainSection = ({ mainNews }: { mainNews: MainNewsType }) => {
  const highLight: ArticleType = mainNews.articles[0];

  function getBanglaTimeAgo(dateString: string): string {
    const publishedDate = new Date(dateString);
    const now = new Date();

    const diffInSeconds = Math.floor(
      (now.getTime() - publishedDate.getTime()) / 1000,
    );

    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;

    const toBanglaNumber = (num: number): string => {
      return num.toString().replace(/\d/g, (digit: string) => {
        return "০১২৩৪৫৬৭৮৯"[Number(digit)];
      });
    };

    if (diffInSeconds < minute) {
      return "এইমাত্র";
    }

    if (diffInSeconds < hour) {
      const minutes = Math.floor(diffInSeconds / minute);
      return `${toBanglaNumber(minutes)} মিনিট আগে`;
    }

    if (diffInSeconds < day) {
      const hours = Math.floor(diffInSeconds / hour);
      return `${toBanglaNumber(hours)} ঘণ্টা আগে`;
    }

    const days = Math.floor(diffInSeconds / day);

    if (days < 7) {
      return `${toBanglaNumber(days)} দিন আগে`;
    }

    return publishedDate.toLocaleDateString("bn-BD");
  }
  return (
    <div>
      <div className="max-w-7xl w-full mx-auto my-10">
        <div className="flex gap-5 ">
          <div className="w-2/3 p-5 bg-white rounded-sm">
            <h2 className="text-3xl border-l-4 border-[#DC2626] ps-5">
              {mainNews.title}
            </h2>
            <div className="mt-5">
              <div>
                <Image
                  src={highLight.imageUrl}
                  alt={highLight.imageAlt}
                  width={700}
                  height={700}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <h3 className="my-3 text-2xl font-bold">{highLight.title}</h3>
              <p>{highLight.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[#DC2626] hover:underline"
                >
                  বিস্তারিত পরুন <IoIosArrowRoundForward size={20} />
                </Link>
                <p className="text-[12px]">{getBanglaTimeAgo(highLight.lastPublished)}</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-sm p-6 max-h-178 overflow-y-scroll ">
            {mainNews.articles.slice(1).map((news: ArticleType) => (
              <div key={news.id} className="p-2.5 border border-base-200 mb-2.5">
                <h4 className="text-lg font-semibold mb-5">{news.title}</h4>
                <p className="text-[12px]">{news.description}</p>
                <div className="flex justify-between items-center mt-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[#DC2626] hover:underline text-[14px]"
                >
                  বিস্তারিত পরুন <IoIosArrowRoundForward size={20} />
                </Link>
                <p className="text-[12px]">{getBanglaTimeAgo(highLight.lastPublished)}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
