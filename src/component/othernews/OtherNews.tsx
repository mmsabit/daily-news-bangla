import { MainNewsType } from "@/type/NewsType";
import NewsCard from "./NewsCard";

const OtherNews = ({ newsSec }: { newsSec: MainNewsType }) => {
  return (
    <div>
      <div className="w-full p-5 bg-white rounded-sm lg:max-w-7xl max-w-9/10 mx-auto mt-6">
        <h2 className="text-3xl border-l-4 border-[#DC2626] ps-5 mb-5">
          {newsSec.title}
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            {newsSec.articles.slice(0,4).map((news, ind)=>(
                <NewsCard news={news} key={ind} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OtherNews;
