import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Cover } from '../components/share/cover';
import { MainContainer } from '../components/share/main-container';
import { NavGallery } from '../components/home';

import { getGalleryItems } from '../constants';
import { useSelector } from '../hooks';

const coverUrl = 'cover.webp';

const Home: React.FC = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <MainContainer fluid className="py-0">
      <Row className="mx-0">
        <Col className="p-0">
          <Cover name={user?.nickname} coverUrl={coverUrl} />
        </Col>
      </Row>
      <Row className="m-n2">
        {/*@ts-ignore*/}
        <NavGallery data={getGalleryItems} />
      </Row>
    </MainContainer>
  );
}

export default Home;
