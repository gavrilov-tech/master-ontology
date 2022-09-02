import React from 'react';
import { Spinner } from 'react-bootstrap';

import { MainContainer } from '../main-container';

export const Loading: React.FC = () => {
  return (
    <MainContainer fluid className="py-5 d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </MainContainer>
  );
};




