import { toBanglaNumber } from "@/type/function";
import { ArticleType } from "@/type/NewsType";
import Link from "next/link";

const MostRead = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const sec = data.data

    return (
        <div className="sticky top-0">
            {sec.map((n:ArticleType, i:number)=>{
                const bangla = toBanglaNumber(i+1);
                return(
                     <Link key={i} href={`/news/${n.id}`} className="newslink">
                    <div  className="flex gap-3 border border-base-300 p-4 mb-2 bg-white rounded-2xl items-center">
                        <h4 className="text-2xl">
                            {bangla}
                        </h4>
                        <h3>
                            {n.title}
                        </h3>
                    </div>
                    </Link>
                )

            })}
        </div>
    );
};

export default MostRead;