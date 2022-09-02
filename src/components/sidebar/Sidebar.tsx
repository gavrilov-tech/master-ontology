import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import { CONCEPTS_ROUTE, HOME_ROUTE, UPLOAD_ROUTE, USER_INFO_ROUTE } from '../../constants';
import SidebarItem from './SidebarItem';

import './styles.scss';

const Sidebar: React.FC = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <>
      <ListGroup className="shadow mb-2 sidebar">
        <SidebarItem name="Home" route={HOME_ROUTE}/>
        <SidebarItem name="User" route={USER_INFO_ROUTE} />
        <SidebarItem name="Concepts" route={CONCEPTS_ROUTE} />
        <SidebarItem name="Upload File" route={UPLOAD_ROUTE} />
      </ListGroup>

      <ListGroup className="shadow mt-2">
        {isAuthenticated ? (
          <ListGroup.Item
            role="button"
            className="pe-3 ps-4 text-dark d-flex align-items-center justify-content-between sidebar-item"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log out
          </ListGroup.Item>
        ) : (
          <ListGroup.Item
            role="button"
            className="pe-3 ps-4 text-dark d-flex align-items-center justify-content-between sidebar-item"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </ListGroup.Item>
        )}
        {!isAuthenticated && (
          <ListGroup.Item
            role="button"
            className="pe-3 ps-4 text-dark d-flex align-items-center justify-content-between sidebar-item"
            onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
          >
            Sign Up
          </ListGroup.Item>)
        }
      </ListGroup>
    </>
  );
}

export default Sidebar;
