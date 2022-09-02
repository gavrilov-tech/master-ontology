import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

import { CUBE_ICON } from '../../assets/icons/Icon';
import { NEW_CONCEPT_ROUTE } from '../../constants';
import { ConceptsList } from '../../components/concepts';
import { MainContainer } from '../../components/share/main-container';
import { PageHeader } from '../../components/share/page-header';
import { useActions, useSelector } from '../../hooks';

const Concepts: React.FC = () => {
  const { getConcepts } = useActions();
  const navigate = useNavigate();
  const { isFetching, concepts, error } = useSelector((state) => state.concepts);

  useEffect(() => {
    (async () => {
      if (!concepts.length) {
        await getConcepts();
      }
    })();
  }, []);

  return (
    <MainContainer fluid className="px-sm-2">
      <PageHeader iconName={CUBE_ICON} title="Concepts" />
      <Row className="mt-4 mx-0">
        <Col xs={12} className="px-0">
          <Button variant="outline-dark" className="ms-3" onClick={() => navigate(NEW_CONCEPT_ROUTE)}>
            Add New Concept
          </Button>
        </Col>
      </Row>
      <Row className="mt-4 mx-0">
        <Col xs={12} className="px-0">
          <ConceptsList concepts={concepts} />
        </Col>
      </Row>
    </MainContainer>
  );
}

export default Concepts;
