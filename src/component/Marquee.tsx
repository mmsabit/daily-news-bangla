import { lNewsType } from "@/type/NewsType";
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
        <MarqueeText direction="right" duration={20}>
          {leatestNews.map((news: lNewsType) => (
            <span key={news.id} >
              <span>{news.title}</span>
              <span className="px-3">●</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
