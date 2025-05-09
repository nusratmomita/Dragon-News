import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RIghtAside';


const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>            

            <main className='w-11/12 mx-auto my-10 grid grid-cols-12 p-10'>
                <aside className='col-span-3 sticky top-10 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6 '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-10 h-fit'>
                   <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;