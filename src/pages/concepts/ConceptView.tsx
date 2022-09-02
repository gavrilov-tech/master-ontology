import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Col, Row } from 'react-bootstrap';

import { FOLDER_ICON } from '../../assets/icons/Icon';
import { CONCEPTS_ROUTE, NEW_CONCEPT_ROUTE } from '../../constants';
import { ConceptForm } from '../../components/concepts';
import { MainContainer } from '../../components/share/main-container';
import { PageHeader } from '../../components/share/page-header';
import { useActions, useSelector } from '../../hooks';
import Home from '../Home';
import { Concept } from '../../types';

const ConceptView: React.FC = () => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const { isFetching, concepts, error } = useSelector((state) => state.concepts);
  const { getConcepts, createConcept, updateConcept,deleteConcept } = useActions();
  const navigate = useNavigate();
  const { conceptId } = useParams();
  const { pathname } = useLocation();

  const [currentConcept, setCurrentConcept] = useState<Concept>();
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [isSubmitFetch, setSubmitFetch] = useState(false);

  const isNewConceptView = useMemo(() => pathname === NEW_CONCEPT_ROUTE, [
    pathname,
  ]);

  const getAccessToken = useCallback(async () => {
    try {
      return await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
    } catch (e) {
      return await getAccessTokenWithPopup({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
    }
  }, []);

  useEffect(() => {
    (async () => {
      await getConcepts();
    })();
  }, []);

  useEffect(() => {
    if (conceptId) {
      const concept = concepts.find(
        (item) => item._id === conceptId
      );
      if (concept) {
        setCurrentConcept(concept);
      } else {
        navigate(CONCEPTS_ROUTE);
      }
    }
  }, [conceptId]);

  useEffect(() => {
    if (isSubmitFetch && !isFetching) {
      setSubmitFetch(false);
      if (!error) {
        navigate(CONCEPTS_ROUTE);
      }
    }
  }, [isFetching, error]);

  const handleSubmit = async (concept: Concept) => {
    const token = await getAccessToken();
    if (concept && token) {
      setSubmitFetch(true);
      setDisableSubmitButton(true);
      if (!conceptId) {
        await createConcept({ accessToken: token, concept });
      } else {
        await updateConcept({ accessToken: token, concept });
      }
      setDisableSubmitButton(false);
    }
  };

  const handleDelete = async (id: string) => {
    const token = await getAccessToken();
    if (conceptId && token) {
      setSubmitFetch(true);
      setDisableSubmitButton(true);
      await deleteConcept({ accessToken: token, id })
      setDisableSubmitButton(false);
      navigate(CONCEPTS_ROUTE);
    }
  };

  return (
    <MainContainer fluid className="px-sm-3">
      <PageHeader
        iconName={FOLDER_ICON}
        title={isNewConceptView ? 'Add New Concept' : 'Edit Concept'}
      />
      <Row className="my-4 justify-content-center">
        <Col
          xs={12}
          md={10}
          xl={8}
          className="d-flex flex-column align-items-center"
        >
          <ConceptForm disableButton={disableSubmitButton} concept={currentConcept} onDelete={handleDelete} onSubmit={handleSubmit} />
        </Col>
      </Row>
    </MainContainer>
  );
}

export default withAuthenticationRequired(ConceptView, { onRedirecting: () => <Home/> });
