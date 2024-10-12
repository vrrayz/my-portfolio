'use client';
import React from 'react'
import { RiCodeSSlashFill } from "react-icons/ri";
import { Burger } from './icons/Burger';


export const Navigation = () => {
    return (
        <nav className='navigation'>
            <a href="#" className='logo'>
                <RiCodeSSlashFill size={21} />
                <span>TheGrimSavage</span>
            </a>
            <Burger />
        </nav>
    )
}
