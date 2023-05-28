import React from 'react'
import { Sidebar } from '../organisms/SideBar/index';
import { Navbar } from "../organisms/Navbar/index";


export const HomePage = () => {
    return (
        <div>
            <Navbar type='navbar' />
        <div className='mt-5 flex side-bar '>
        <Sidebar  type='sidebar' />
        </div>
        </div>
        
    );
};