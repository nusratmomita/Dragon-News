import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RIghtAside';
import Loading from '../Components/Loading';
// import Loading from '../Components/Loading';


const Root = () => {
    const {state} = useNavigation();

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
                {
                    state=="loading" ? <Loading/> : <Outlet></Outlet> 
                }
                        
                    {/* <Outlet></Outlet> */}
                </section>
                <aside className='col-span-3 sticky top-10 h-fit'>
                   <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;