import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

import Icon from '../../../assets/icons/Icon';

import './styles.scss';

interface PageHeaderProps {
  iconName: string;
  title: string;
  subtitle?: string;
}


const PageHeader: React.FC<PageHeaderProps> = ({ iconName, title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="mx-0 d-sm-none align-self-start">
        <Col>
          <Button variant="outline-dark" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
      </Row>
      <Row className="mx-0 mb-4 pt-3 pt-sm-4 justify-content-center">
        <Col
          xs={12}
          md={8}
          xl={6}
          className="d-flex flex-column align-items-center"
        >
          <div
            className={`${
              subtitle ? 'mb-3 ' : ''
            }d-flex flex-row align-items-center`}
          >
            <Icon className="me-2" name={iconName} height="2rem" width="2rem" />
            <h3 className="m-0 ms-2">{title}</h3>
          </div>
          {subtitle && <div className="text-center">{subtitle}</div>}
        </Col>
      </Row>
    </>
  );
}

export default React.memo(PageHeader);
