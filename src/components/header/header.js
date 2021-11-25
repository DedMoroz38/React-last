import { React } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

export default function Header() {
    const navigation = [
        {
            id: 0,
            path: '/',
            title: 'Мессенджер'
        },
        {
            id: 1,
            path: '/profile',
            title: 'Профиль'
        },
        {
            id: 2,
            path: '/gits',
            title: 'Gits'
        },
        {
            id: 3,
            path: '/signup',
            title: 'Registration'
        },
        {
            id: 4,
            path: '/login',
            title: 'Login'
        },
    ];
    return (
        <div className='header'>
            <div className="container">
                <div className="header-box">
                    {navigation.map((elem) => (
                        <NavLink
                            key={elem.id}
                            className='nav'
                            to={elem.path}>{elem.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}