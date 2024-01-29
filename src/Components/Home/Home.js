import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import '../../Styles.css'


const Home = () => {
    return (
        <div>
            <Search />
            <QuickSearch />
        </div>
    );
}

export default Home;
