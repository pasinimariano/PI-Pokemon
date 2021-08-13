import React from 'react';
import Pagination from '../Home/Pagination';
import SideBar from '../Home/SideBar';
import Styles from './Styles/home.module.css';

const Home = () => {
    return (
        <div className={Styles.Container}>
            <SideBar />
            <Pagination />
        </div>
    )
};

export default Home;