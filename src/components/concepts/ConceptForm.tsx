import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';

import { Concept } from '../../types';
import { CONCEPTS_ROUTE } from '../../constants';
import { ConceptFormFields } from './ConceptFormFields';

export const EMPTY_VALUE_ERROR = 'Required field';

const FORM_FIELD_NAMES = {
  _id: '_id',
  conceptId: 'conceptId',
  displayName: 'displayName',
  description: 'description',
  parentIds: 'parentIds',
  childIds: 'childIds',
  alternateNames: 'alternateNames',
};

const schema = yup.object().shape({
  [FORM_FIELD_NAMES.conceptId]: yup.number().min(1).required(EMPTY_VALUE_ERROR),
  [FORM_FIELD_NAMES.displayName]: yup.string().required(EMPTY_VALUE_ERROR),
  [FORM_FIELD_NAMES.description]: yup.string().required(EMPTY_VALUE_ERROR),
  [FORM_FIELD_NAMES.parentIds]: yup.string(),
  [FORM_FIELD_NAMES.childIds]: yup.string().required(EMPTY_VALUE_ERROR),
  [FORM_FIELD_NAMES.alternateNames]: yup.string(),
});

interface ConceptFormProps {
  concept: Concept | undefined;
  disableButton: boolean;
  onSubmit: Function;
  onDelete: Function;
}

export const ConceptForm: React.FC<ConceptFormProps> = ({ concept, disableButton, onSubmit, onDelete }) => {
  const navigate = useNavigate();
  const [currentConcept, setCurrentConcept] = useState<Concept | undefined>();

  useEffect(() => setCurrentConcept(concept), [concept]);

  const handleSetConcept = (
    conceptForSet: any,
  ) => {
    if (conceptForSet) {
      const fields = [
        FORM_FIELD_NAMES._id,
        FORM_FIELD_NAMES.conceptId,
        FORM_FIELD_NAMES.displayName,
        FORM_FIELD_NAMES.description,
        FORM_FIELD_NAMES.parentIds,
        FORM_FIELD_NAMES.childIds,
        FORM_FIELD_NAMES.alternateNames,
      ];

      fields.forEach((field) => {
        setValue(field, conceptForSet[field], { shouldValidate: true });
      });
    }
  };

  useEffect(() => {
    if (currentConcept) {
      handleSetConcept(currentConcept);
    }
  }, [currentConcept]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      [FORM_FIELD_NAMES.conceptId]: 1,
      [FORM_FIELD_NAMES.displayName]: '',
      [FORM_FIELD_NAMES.description]: '',
      [FORM_FIELD_NAMES.parentIds]: '',
      [FORM_FIELD_NAMES.childIds]: '',
      [FORM_FIELD_NAMES.alternateNames]: '',
    },
  });

  const submit = (data: any) => {
    onSubmit(data);
  };

  return (
    <Form className="w-100" noValidate onSubmit={handleSubmit(submit)}>
      <ConceptFormFields
        errors={errors}
        control={control}
        formFieldNames={FORM_FIELD_NAMES}
      />

      <Row className="mt-4">
        <Col xs={12} className="d-flex justify-content-end">
          {concept && (<Button
            variant="outline-dark"
            className="me-4"
            disabled={disableButton}
            onClick={() => onDelete(concept._id)}
          >
            Delete
          </Button>)}
          <Button
            variant="outline-dark"
            onClick={() => navigate(CONCEPTS_ROUTE)}
          >
            Cancel
          </Button>
          <Button type="submit" variant="outline-dark" className="ms-4" disabled={disableButton}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
