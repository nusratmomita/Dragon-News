import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='mt-10 flex items-center justify-center gap-5 p-6 bg-gray-200 h-[80px] rounded-2xl'>
            <h1 className='text-white bg-secondary p-2 rounded-xl'>Latest</h1>
            <Marquee className='flex gap-2' pauseOnHover={true} speed={50}>
                <p className='font-bold text-xl'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-bold text-xl'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-bold text-xl'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;
