import React ,{use} from 'react';
import { NavLink } from 'react-router';
import "./Categories.css"


const categoryItems = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    // console.log(categoryItems);
    const categories = use(categoryItems);
    // console.log(categories)

    return (
        <div className='categories flex flex-col gap-2 mt-5'>
            {
                categories.map((category) => <NavLink to={`/category/${category.id}`} key={category.id} className="categoryLink bg-base-200 text-center p-5 font-bold text-xl">{category.name}</NavLink>)
            }
        </div>
    );
};

export default Categories;