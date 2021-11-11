import { useRouter } from "next/router";
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  let {locale, locales} = useRouter();
  let menu;

  if(locale === 'es'){
    menu = [{ title: "inicio", path: "/" },{ title: "nosotros", path: "/nosotros" },{ title: "blog", path: "/blog" }]
  } else {
    menu = [{ title: "home", path: "/" },{ title: "about", path: "/about" },{ title: "blog", path: "/blog" }]
  }

  return (
    <div>
      {/*Main Header*/}
      <Header menu={menu} />

      {/*Main Content*/}
      {children}

      {/*Footer*/}
      <Footer locales={locales} />
    </div>
  );
}