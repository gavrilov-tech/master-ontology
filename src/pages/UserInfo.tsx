import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { ACCOUNT_INFO_ICON } from '../assets/icons/Icon';
import { Image } from '../components/share/image';
import { Loading } from '../components/share/loading';
import { MainContainer } from '../components/share/main-container';
import { PageHeader } from '../components/share/page-header';
import { useSelector } from '../hooks';
import Home from './Home';

const UserInfo: React.FC = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <MainContainer fluid className="px-sm-3">
      <PageHeader
        iconName={ACCOUNT_INFO_ICON}
        title="Account Information"
      />
      {user ? (
        <>
          <Row className="my-2 justify-content-center">
            <Col xs={12} md={10} xl={8} className="d-flex flex-column">
              <h2 className="mt-0 text-decoration-underline">
                Sign In Information
              </h2>
              <h4 className="fw-normal text-black-50">Email Address</h4>
              <h4 className="lh-base text-truncate">{user?.email}</h4>
            </Col>
          </Row>
          <Row className="mb-4 justify-content-center">
            <Col xs={12} md={10} xl={8} className="d-flex flex-column">
              <Image src={user?.picture} alt={user?.nickname} className="w-25" />
            </Col>
          </Row>
          <Row className="mb-4 justify-content-center">
            <Col xs={12} md={10} xl={8} className="d-flex flex-column">
              <h4 className="fw-normal text-black-50">Nickname</h4>
              <h4 className="lh-base text-truncate">{user?.nickname}</h4>
            </Col>
          </Row>
          <Row className="mb-4 justify-content-center">
            <Col xs={12} md={10} xl={8} className="d-flex flex-column">
              <h4 className="fw-normal text-black-50">Name</h4>
              <h4 className="lh-base text-truncate">{user?.name}</h4>
            </Col>
          </Row>
        </>
        ): (
          <Loading/>
        )}
    </MainContainer>
  );
}

export default withAuthenticationRequired(UserInfo, { onRedirecting: () => <Home/> });
