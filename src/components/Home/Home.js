import React from 'react';
import { Navbar } from '../Nav/Navbar';
import { Header } from "./Header/Header";
import './Home.css';
import { Main } from './Main/Main';

export const Home = () => {
    return (
        <div className='home-container'>

            <Navbar/>
            <Header/>

            <div className='home-divider'>
                Conocé nuestros principales vehículos
            </div>

            <Main/>
        </div>
    )
}
