import React from 'react';
import Navigation from '../components/Navigation';
import ResumeMe from '../components/ResumeMe';
import ViewArticles from '../components/ViewArticles';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <ResumeMe/>
            <ViewArticles/>
        </div>
    );
};

export default Home;