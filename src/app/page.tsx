import MainSection from "@/component/main-section/MainSection";
import Marquee from "@/component/Marquee";


export default async function Home() {
  const res = await fetch ("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sec = data.data;
  const mainNews = sec[0];
  console.log(mainNews);
  return (
    <div >
      <Marquee/>
      <MainSection mainNews={mainNews}/>
    </div>
  );
}
