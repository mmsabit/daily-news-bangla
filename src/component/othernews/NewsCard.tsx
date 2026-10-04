import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getBanglaTimeAgo, textshorter } from "@/type/function";
import { ArticleType } from "@/type/NewsType";

const NewsCard = ({ news }: { news: ArticleType }) => {
  return (
    <div>
      <Link href={`/news/${news.id}`} className="newslink">
        <div className="flex flex-col justify-between h-full border border-base-300 rounded-md overflow-hidden">
          <div>
            <div>
              <Image
                src={news.imageUrl}
                alt={news.imageAlt}
                width={294}
                height={165}
                className="w-full h-41.25 object-cover "
                loading="eager"
              />
            </div>
            <h3 className="my-3 mx-3 text-lg font-bold">{news.title}</h3>
            <p className="text-[14px] mx-3">{textshorter(news.description)}</p>
          </div>
          <div>
            <div className="flex justify-between items-center m-3">
              <p className="flex items-center gap-2 text-[#DC2626] text-[12px] hover:underline plink">
                বিস্তারিত পড়ুন <IoIosArrowRoundForward size={20} />
              </p>
              <p className="text-[12px]">
                {getBanglaTimeAgo(news.lastPublished)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
