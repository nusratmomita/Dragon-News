import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
            <aside>
                <h1 className="text-black text-2xl font-bold">All Categories</h1>
                <Suspense fallback={<span className="loading loading-dots loading-6xl"></span>}>
                    <Categories></Categories>
                </Suspense>
            </aside>
        </div>
    );
};

export default LeftAside;