import MainSection from "@/component/main-section/MainSection";
import Marquee from "@/component/Marquee";
import OtherNews from "@/component/othernews/OtherNews";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'হোম - দৈনিক বাংলা সংবাদ',
}

export default async function Home() {
  const res = await fetch ("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sec = data.data;
  const mainNews = sec[0];
  const selectedNews = sec[1];
  const bangladesh = sec[3];
  const india = sec[5];
  const international = sec[6];
  const health = sec[7];
  const video = sec[8];
  const otherNews = sec[9];

  return (
    <div >
      <Marquee/>
      <MainSection mainNews={mainNews}/>
      <OtherNews newsSec = {selectedNews} />
      <OtherNews newsSec = {bangladesh} />
      <OtherNews newsSec = {india} />
      <OtherNews newsSec = {international} />
      <OtherNews newsSec = {health} />
      <OtherNews newsSec = {video} />
      <OtherNews newsSec = {otherNews}/>
      
    </div>
  );
}
