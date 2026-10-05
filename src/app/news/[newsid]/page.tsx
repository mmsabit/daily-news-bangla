import MostRead from "@/component/MostRead";
import { newsItemType } from "@/type/NewsType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsPage = async ({
  params,
}: {
  params: Promise<{ newsid: string }>;
}) => {
  const { newsid } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
  );
  const val = await res.json();
  const data = val.data;
  const body = data.body;

  return (
    <div>
      <div className="lg:max-w-7xl max-w-9/10 mx-auto flex gap-6 pt-10">
        <div className="w-2/3 bg-white p-5">
        <h2 className="text-3xl/relaxed font-bold mb-6">{data.title}</h2>

        {body.map((item: newsItemType, ind: number) => {
          if (item.type === "image") {
            return <div key={ind}>
                <Image
                src={item.url}
                alt={item.altText}
                width={item.width}
                height={item.height}
                className="max-w-full max-h-full object-cover"
                />
                <p className="text-[12px] mt-1">
                    ছবিঃ {item.copyrightHolder}
                </p>
            </div>;
          }

          return <div className="my-5" key={ind}>{item.text}</div>;
        })}
        <Link href={data.sourceUrl} className="text-[#DC2626] hover:underline">Orginal Link: {data.source}</Link>
        </div>
        <div className="w-1/3 relative">
          <MostRead/>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
