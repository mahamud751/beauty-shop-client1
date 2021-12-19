import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import ReviewShow from '../ReviewShow/ReviewShow';
import HomeBanner from './HomeBanner/HomeBanner';



const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Faq></Faq>
            <ReviewShow></ReviewShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;