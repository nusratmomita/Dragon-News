import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const Home = () => {
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

            <main>
                <section className="left-side"></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className="right-side"></section>
            </main>
        </div>
    );
};

export default Home;