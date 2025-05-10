import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaRegStar } from "react-icons/fa";

const NewsDetailsCard = () => {
    const {id} = useParams();
    const NewsData = useLoaderData();
    // console.log(NewsData)

    const singleNewsData = NewsData.find((news)=> news.id === id);
    // console.log(singleNewsData)
    const {  category_id , title , details , image_url , total_view ,others , tags , rating} = singleNewsData;
    return (
        <div className='space-y-5 bg-gray-100 p-5 mb-10'>
            <img className="w-full h-[520px] object-cover rounded-2xl"src={image_url} alt="newsImage" />
            <h1 className='text-2xl font-bold '>{title}</h1>
            <p className='text-xl text-gray-800'>{details}</p>
            <h1 className='flex gap-1 text-xl font-bold'>Current Rating: {rating.number}<FaRegStar size={25} color='red'></FaRegStar></h1>
            <h4 className='text-xl font-medium'>Total View: {total_view}</h4>
            <h2>{others.is_trending ? <h1 className='text-white font-bold bg-green-600 w-[90px] p-2 rounded-xl'>Trending</h1>:""}</h2>
            <h2 className='text-xl font-medium'>Tags: {tags.map(tag => <h1 className='inline-block ml-3'>{tag}</h1>)}</h2>
            <Link className="btn mt-5 bg-green-600 text-white hover:bg-green-700 w-[250px] mx-auto" to={`/category/${category_id}`}>Go back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;