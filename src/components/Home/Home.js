import React, { createContext, useState } from 'react';
import Categories from '../Categories/Categories';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';

export const categoryContext = createContext();

const Home = () => {
    const [category, setCategory] = useState('lunch');
    console.log(category);
    return (
        <categoryContext.Provider value={[category, setCategory]}>
            <Header></Header>
            <Categories></Categories>
            <CustomerReview></CustomerReview>
        </categoryContext.Provider>
    );
};

export default Home;