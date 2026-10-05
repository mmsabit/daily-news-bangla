import { lNewsType } from "@/type/NewsType";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const leatestNews = data.data;
  return (
    <div className="bg-[#f1f3ff]">
      <div className="max-w-7xl w-full mx-auto flex items-center">
        <div className="text-nowrap bg-[#DC2626] px-4 py-2 text-white">সর্বশেষ</div>
        <MarqueeText direction="right" duration={15} pauseOnHover={true}>
          {leatestNews.map((news: lNewsType) => (
            <Link
            key={news.id}
            href={`/news/${news.id}`}
            >
            <span >
              <span className="hover:text-[#DC2626]">{news.title}</span>
              <span className="px-3">●</span>
            </span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
