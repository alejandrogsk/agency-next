import React from 'react'
import Link from "next/link";
import MobileMenu from './MobileMenu';

const Header = ({ menu }) => {


    return (
        <header className="header">
            <span>Expodev</span>
            <ul>
            {
                menu.map((item, i)=> (
                    <li key={i}>
                        <Link href={item.path}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))
            }
            </ul>
            {/* <MobileMenu menu={menu}/> */}
        </header>
    );
}

export default Header