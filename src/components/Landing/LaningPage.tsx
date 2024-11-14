import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Insights from './Insights';
import Stats from './Stats';
import Pricing from './Pricing';
import Faq from './Faq';
import Footer from './Footer';

const LaningPage = (): JSX.Element => {
    return(
        <div className="bg-[url('/bg.svg')]">
            <div className='bg-c1'>
            <Navbar />
            <Hero />
            </div>
            <Insights />
            <Stats />
            <Pricing />
            <Faq />
            <Footer />
        </div>

    );
}
// #endregion

export default LaningPage;