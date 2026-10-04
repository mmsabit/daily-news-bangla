import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getBanglaTimeAgo, textshorter } from "@/type/function";
import { ArticleType } from "@/type/NewsType";

const NewsCard = ({ news }: { news: ArticleType }) => {
  return (
    <div>

        <div className="flex flex-col justify-between h-full">
          <div >
            <div>
              <Image
                src={news.imageUrl}
                alt={news.imageAlt}
                width={294}
                height={165}
                className="w-full h-41.25 object-cover rounded-sm"
                loading="eager"
              />
            </div>
            <h3 className="my-3 text-xl font-bold">{news.title}</h3>
            <p className="text-[14px]" >{textshorter(news.description)}</p>
          </div>
          <div>
            <div className="flex justify-between items-center mt-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#DC2626] hover:underline"
              >
                বিস্তারিত পন <IoIosArrowRoundForward size={20} />
              </Link>
              <p className="text-[12px]">
                {getBanglaTimeAgo(news.lastPublished)}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NewsCard;
