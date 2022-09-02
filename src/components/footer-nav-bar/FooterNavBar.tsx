import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Icon, { ACCOUNT_INFO_ICON, CUBE_ICON, ORDER_ICON, } from '../../assets/icons/Icon';
import { HOME_ROUTE, USER_INFO_ROUTE } from '../../constants';
import { urlPathToSegments } from '../../utils';

import './styles.scss';

const FooterNavBar: React.FC = () => {
  const location = useLocation();

  const isDisabledNavLink = useCallback(
    (route: string) =>
      urlPathToSegments(location.pathname)[0] === urlPathToSegments(route)[0],
    [location.pathname]
  );

  return (
    <Navbar className="d-sm-none footer-nav-bar" fixed="bottom" bg="light" variant="light">
      <Container>
        <Nav fill className="w-100">
          <Nav.Link as={Link} to={HOME_ROUTE} disabled={isDisabledNavLink(HOME_ROUTE)}>
            <Icon name={ORDER_ICON} height="1.75rem" width="1.75rem"/>
          </Nav.Link>
          <Nav.Link as={Link} to={USER_INFO_ROUTE} disabled={isDisabledNavLink(USER_INFO_ROUTE)}>
            <Icon name={ACCOUNT_INFO_ICON} height="1.75rem" width="1.75rem"/>
          </Nav.Link>
          <Nav.Link as={Link} to={USER_INFO_ROUTE} disabled={isDisabledNavLink(USER_INFO_ROUTE)}>
            <Icon name={CUBE_ICON} height="1.75rem" width="1.75rem"/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FooterNavBar;
