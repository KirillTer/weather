import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Navigation />
      <div className="container">
        <Nav tabs>
          <NavItem>
            <Link to="/weather/male">
              <NavLink
                className={classnames({ active: tab === 1 })}
                onClick={() => setTab(1)}
              >
                Weather for Male
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/weather/female">
              <NavLink
                className={classnames({ active: tab === 2 })}
                onClick={() => setTab(2)}
              >
                Weather for Female
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
        {children}
      </div>
    </>
  );
};

export default Layout;
