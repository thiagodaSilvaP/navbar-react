import React, {useState} from 'react';

import {AiFillHome} from 'react-icons/ai'
import {BiHelpCircle} from 'react-icons/bi';
import {MdOutlineDesignServices} from 'react-icons/md';

import {Bar} from './Bar/index';

export const SideBar = () => {
    const [sideBarData, setSideBarData] = useState([
        {title: 'Home', icon: <AiFillHome/>},
        {title: 'Edit', icon: <MdOutlineDesignServices/>},
        {title: 'Help', icon: <BiHelpCircle/>},
    ]);
    return (
        <div className="bar-container" style={{marginTop: '1rem'}}>
            {sideBarData.map(bar => <Bar title={bar.title} icon={bar.icon}/>)}
        </div>
    )
};