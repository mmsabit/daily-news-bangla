import { ArticleType, MainNewsType } from "@/type/NewsType";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getBanglaTimeAgo } from "@/type/function";

const MainSection = ({ mainNews }: { mainNews: MainNewsType }) => {
  const highLight: ArticleType = mainNews.articles[0];

  return (
    <div>
      <div className="lg:max-w-7xl max-w-9/10 w-full mx-auto my-10">
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 p-5 bg-white rounded-sm">
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
                  loading="eager"
                />
              </div>
              <h3 className="my-3 text-2xl font-bold">{highLight.title}</h3>
              <p>{highLight.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[#DC2626] hover:underline"
                >
                  বিস্তারিত পড়ুন <IoIosArrowRoundForward size={20} />
                </Link>
                <p className="text-[12px]">
                  {getBanglaTimeAgo(highLight.lastPublished)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white rounded-sm px-6 pb-6 max-h-178 overflow-y-scroll relative">
            <div className=" pb-3 pt-9 mb-2 bg-white sticky top-0 w-full">
              <h2 className="text-3xl border-l-4 border-[#DC2626] ps-5">
                অন্যান্য খবর
              </h2>
            </div>

            {mainNews.articles.slice(1).map((news: ArticleType) => (
              <div
                key={news.id}
                className="p-2.5 border border-base-300 rounded-md mb-2.5"
              >
                <div className="flex gap-4">
                  <h4 className="text-lg font-semibold mb-5 w-8/10">
                    {news.title}
                  </h4>
                  <Image
                    src={news.imageUrl}
                    alt={news.imageAlt}
                    width={80}
                    height={80}
                    className="w-17.5 h-17.5 object-cover rounded-sm"
                    loading="eager"
                  />
                </div>

                <p className="text-[12px]">{news.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-[#DC2626] hover:underline text-[14px]"
                  >
                    বিস্তারিত পড়ুন <IoIosArrowRoundForward size={20} />
                  </Link>
                  <p className="text-[12px]">
                    {getBanglaTimeAgo(news.lastPublished)}
                  </p>
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
