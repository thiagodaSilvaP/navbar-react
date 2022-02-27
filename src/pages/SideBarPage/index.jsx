import {SideBar} from '../../components/SideBar'

import {AiOutlineClose} from 'react-icons/ai';

import './style.css';


export const SideBarPage = ({isNavBar, setIsNavBar}) => {
    if (isNavBar === false) return null
    return (
        <div className="sidebar-container">
            <button className='close-navbar' onClick={() => setIsNavBar(false)}><AiOutlineClose/></button>
            <SideBar className='bar'/>
        </div>
    )
};
