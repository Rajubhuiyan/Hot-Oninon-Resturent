import React, { createContext, useState } from 'react';
import Categories from '../Categories/Categories';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
export const categoryContext = createContext();

const Home = () => {
    const [category, setCategory] = useState('lunch');
    return (
        <categoryContext.Provider value={[category, setCategory]}>
            <Header></Header>
            <Categories></Categories>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </categoryContext.Provider>
    );
};

export default Home;