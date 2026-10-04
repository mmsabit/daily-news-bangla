import NewsCard from '@/component/othernews/NewsCard';
import { catagoryType } from '@/type/NewsType';
import React from 'react';

const Catagory = async ({params}:{params:Promise<{catagory_id: string}>}) => {

    const {catagory_id} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${catagory_id}`)
    const data:catagoryType = await res.json();
    const Newses = data.data;

    return (
        <div>
            <div className='lg:max-w-7xl mx-auto w-full p-8 bg-white rounded-xl mt-8'>
                <h2 className='text-4xl text-center font-bold'>{data.title}</h2>
            </div>
            <div className="lg:max-w-7xl mx-auto w-full p-8 bg-white mt-8">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    {
                        Newses.map((news, ind)=>(
                            <NewsCard news={news} key={ind} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagory;