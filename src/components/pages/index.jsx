import React from 'react'
import { Sidebar } from '../organisms/SideBar/index';
import { Navbar } from "../organisms/Navbar/index";
import { Mainsection } from "../templates/mainsection/index";

export const HomePage = () => {
    return (
        <div>
            <Navbar type='navbar' />
        <div className='mt-5 flex mobile'>
        <Sidebar  type='sidebar' /> <Mainsection type='mainsection' />
        </div>
        </div>
        
    );
};