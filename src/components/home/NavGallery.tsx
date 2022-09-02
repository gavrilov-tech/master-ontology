import React from 'react';
import { Col } from 'react-bootstrap';

import { GalleryItem } from '../../types';
import NavItem from './NavItem';

import './styles.scss';

const NavGallery: ({ data }: { data: GalleryItem[] }) => JSX.Element[] = ({ data }) => {
  return data.map((item: GalleryItem) => (
    <Col key={item.title} xs={12} md={6} className="p-2 nav-gallery">
      <NavItem data={item} />
    </Col>
  ));
}

export default NavGallery;
