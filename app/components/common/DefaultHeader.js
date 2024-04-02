import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";


const DefaultHeader = () => {
  return (
    <header className="header-nav menu_style_home_one home3_style main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Link href="/" className="navbar_brand float-start dn-md">
            <Image
              width={150}
              height={65}
              className="logo1 img-fluid"
              src="/images/TMPlogo12.png"
              alt="TMPlog1.png"
            />
            <Image
              width={150}
              height={65}
              className="logo2 img-fluid"
              src="/images/TMPlogo12.png"
              alt="TMPlogo1.png"
            />
          </Link>
          {/* Responsive Menu Structure*/}
          

          <ul
            // id="respMenu"
            className="ace-responsive-menu text-end"
            data-menu-style="horizontal"
          >
             <li className="add_listing">
              <Link href="/listing-v5">Buy Car</Link>
            </li>
            <li className="add_listing">
              <Link href="/loan-calculator">Sell Car </Link>
            </li>
            
            <MainMenu />
            <li>
              <Link href="/add-listings"></Link>
            </li>
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt0" role="button">
                <span />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
