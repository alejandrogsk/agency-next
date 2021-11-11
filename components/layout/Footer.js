import React from 'react';
import Link from "next/link";

const Footer = ({locales}) => {
    return (
        <footer >
        <p>© 2020</p>

        <ul>
          {locales.map((locale) => (
            <li key={locale}>
              <Link href={'/'} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    )
}

export default Footer
