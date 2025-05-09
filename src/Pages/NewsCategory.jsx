import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/Home/NewsCard';

const NewsCategory = () => {
    const { id } = useParams()
    // console.log(id)
    const newsData = useLoaderData();
    // console.log(newsData)

    // setting an array to show the news on the UI
    const [categoryNews , setCategoryNews] = useState([]);

    // to add loading spinner
    const [loading , setLoading] = useState(false);

    // ! good way 
    // const news = newsData.filter((singleNews) => singleNews.category_id == id)
    // console.log(news)

    // ! better way
    useEffect(()=>{
         // showing all news
        if(id=="0"){
            setCategoryNews(newsData)
            // return
        }
        else if(id=="1"){
            const news = newsData.filter((singleNews) => singleNews.others.is_today_pick == true)
            // console.log(news)
            setCategoryNews(news);
        }
        else{
            const news = newsData.filter((singleNews) => singleNews.category_id == id)
            // console.log(news)
            setCategoryNews(news);
        }
        setLoading(true);
    },[newsData ,id])

    return (
        <div className='ml-20 '>
            <h1 className="text-black text-2xl font-bold">Total - {categoryNews.length} News Found</h1>
            
            {
                loading && <Suspense fallback={<span className="loading loading-dots loading-6xl"></span>}></Suspense>
            }
            <div className='mt-4 grid grid-cols-1 mr-10'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>           
        
        </div>
    );
};

export default NewsCategory;