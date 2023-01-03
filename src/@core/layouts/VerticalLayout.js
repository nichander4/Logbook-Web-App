// ** React Imports
import { Fragment, useState, useRef, useEffect } from 'react';

// ** Third Party Packages
import ReactResizeDetector from 'react-resize-detector';

// ** Vertical Menu Components
import NavbarComponent from './components/navbar';
import MenuComponent from './components/menu';

// ** Navigation Menu Data
import { navigationData } from './navigation';
import { Navbar } from 'reactstrap';

const VerticalLayout = (props) => {
  // ** States
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  return (
    <ReactResizeDetector>
      {({ width }) => (
        <div
          className={`wrapper vertical-layout navbar-floating footer-hidden ${
            width >= 1200 ? 'vertical-menu-modern' : ''
          } ${
            width >= 1200 && menuCollapsed ? 'menu-collapsed' : 'menu-expanded'
          } ${width > 1200 && !menuCollapsed ? 'menu-expanded' : ''} ${
            width < 1200 ? 'vertical-overlay-menu' : ''
          } ${width < 1200 && menuVisibility ? 'menu-open' : 'menu-hide'}`}
        >
          <MenuComponent
            data={navigationData}
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
            menuVisibility={menuVisibility}
            setMenuVisibility={setMenuVisibility}
          />

          <Navbar
            expand="lg"
            light
            className="header-navbar navbar align-items-center floating-nav navbar-shadow"
          >
            <div className="navbar-container d-flex content">
              <NavbarComponent setMenuVisibility={setMenuVisibility} />
            </div>
          </Navbar>
          <div
            className={`app-content content overflow-hidden ${
              width < 1200 ? 'ml-0' : ''
            }`}
          >
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper animate__animated animate__fadeIn">
              {props.children}
            </div>
          </div>
          <div
            className={`sidenav-overlay ${menuVisibility ? 'show' : ''}`}
            onClick={() => setMenuVisibility(false)}
          ></div>
        </div>
      )}
    </ReactResizeDetector>
  );
};

export default VerticalLayout;
