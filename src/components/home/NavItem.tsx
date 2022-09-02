import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import Icon, { BLACK_ARROW_ICON } from '../../assets/icons/Icon';
import { GalleryItem } from '../../types';

interface NavItemProps {
  data: GalleryItem;
}

const NavItem: React.FC<NavItemProps> = ({ data }) => {
  const { title, description, linkText, iconName, route } = data;
  const navigate = useNavigate();

  return (
    <Card
      role="button"
      className="w-100 h-100 py-3 px-3 shadow text-start nav-item"
      onClick={() => {
        if (route) {
          navigate(route);
        }
      }}
    >
      <Card.Body className="p-0 w-100 d-flex flex-column justify-content-between">
        <Card.Title className="nav-item-title">
          <Icon name={iconName} height="1.75rem" width="1.75rem" />
          <span className="ms-2">{title}</span>
        </Card.Title>
        {description ? <Card.Text className="nav-item-description">{description}</Card.Text> : null}
        {linkText ? (
          <Card.Link className="nav-item-link">
            <ins className="me-2 text-dark">{linkText}</ins>
            <Icon name={BLACK_ARROW_ICON} height="1.5rem" width="1.5rem" />
          </Card.Link>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default NavItem;
