import React from "react";
import Link from "next/link";
const MobileMenu = ({ menu }) => {
    return (
        <div className="navbar__responsive d-n">
            <input
                type="checkbox"
                className="navbar__responsive--checkbox"
                id="navi-toggle"
            />

            <label for="navi-toggle" className="navbar__responsive--button">
                <span className="navbar__responsive--icon">&nbsp;</span>
            </label>

            <div className="navbar__responsive--background">&nbsp;</div>

            <div className="navbar__responsive--nav">
                <ul className="navbar__responsive--list">
                    {menu.map((item, i) => (
                        <li key={i} className="navbar__responsive--item">
                            <Link href={item.path}>
                                <a className="navbar__responsive--link">
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
