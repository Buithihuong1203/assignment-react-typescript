import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import FilterBy from '../../components/FilterBy';
import Paginnation from '../../components/Paginnation';



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='row'>
                <div className='col-2'>
                    <aside>
                        <FilterBy />
                    </aside>
                </div>
                <div className='col-10'>
                    <main><Outlet /></main>

                </div>


            </div>
            <div className='pl-10'><Paginnation /></div>


            <footer><Footer /></footer>

        </div>
    )
}

export default WebsiteLayout