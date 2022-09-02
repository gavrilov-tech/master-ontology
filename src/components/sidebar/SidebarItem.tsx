import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import Icon, {
  BLACK_SIDEBAR_NAVIGATION_CIRCLE_ICON,
} from '../../assets/icons/Icon';
import { urlPathToSegments } from '../../utils';

interface SidebarItemProps {
  name: string;
  route: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, route }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showSidebarNavigationCircleIcon = useMemo(
    () =>
      urlPathToSegments(location.pathname)[0] === urlPathToSegments(route)[0],
    [location.pathname]
  );

  return (
    <ListGroup.Item
      role="button"
      className="px-3 d-flex align-items-center justify-content-between sidebar-item"
      onClick={() => navigate(route)}
    >
      <span>
        {showSidebarNavigationCircleIcon && (
          <Icon
            name={BLACK_SIDEBAR_NAVIGATION_CIRCLE_ICON}
            height="12px"
            width="12px"
          />
        )}
        <span className="ms-2">{name}</span>
      </span>
    </ListGroup.Item>
  );
}

export default SidebarItem;
