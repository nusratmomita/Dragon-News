import React from 'react';
import Header from '../../Components/Header';
import RightAside from '../../Components/Home/RIghtAside';
import NewsDetailsCard from '../../Components/NewsDetailsCard';

const NewsDetails = () => {
    return (
        <>
            <header className='mb-10'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='ml-15 col-span-9 space-y-5'>
                    <h2 className='text-2xl font-bold '>Dragon news </h2>
                    <NewsDetailsCard></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        
        </>
    );
};

export default NewsDetails;