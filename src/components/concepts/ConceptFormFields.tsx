import React from 'react';
import { Controller } from 'react-hook-form';
import { Form, Col, Row, FloatingLabel } from 'react-bootstrap';

interface ConceptFormFieldsProps {
  control: any;
  errors: any;
  formFieldNames: any;
}

export const ConceptFormFields: React.FC<ConceptFormFieldsProps> = ({
  control,
  errors,
  formFieldNames,
}) => {
  return (
    <>
      <Row className="d-none">
        <Form.Group as={Col} controlId="_idForm">
          <Controller
            name={formFieldNames._id}
            control={control}
            render={({ field: { value } }) => (
              <Form.Control type="hidden" value={value || ''} />
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="conceptIdForm">
          <Controller
            name={formFieldNames.conceptId}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="conceptIdForm"
                label="ID"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="ID"
                  type="number"
                  value={value || 0}
                  onChange={(e) => onChange(e.target.value)}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.conceptId]}
                  isInvalid={!!errors[formFieldNames.conceptId]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.conceptId]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="displayNameForm">
          <Controller
            name={formFieldNames.displayName}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="displayNameForm"
                label="Name"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="Name"
                  type="text"
                  value={value || ''}
                  onChange={(e) => onChange(e.target.value.trimStart())}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.displayName]}
                  isInvalid={!!errors[formFieldNames.displayName]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.displayName]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="descriptionForm">
          <Controller
            name={formFieldNames.description}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="descriptionForm"
                label="Description"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="Description"
                  type="text"
                  value={value || ''}
                  onChange={(e) => onChange(e.target.value.trimStart())}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.description]}
                  isInvalid={!!errors[formFieldNames.description]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.description]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="parentIdsForm">
          <Controller
            name={formFieldNames.parentIds}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="parentIdsForm"
                label="Parent Ids"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="Parent Ids"
                  type="text"
                  value={value || ''}
                  onChange={(e) => onChange(e.target.value.trimStart())}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.parentIds]}
                  isInvalid={!!errors[formFieldNames.parentIds]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.parentIds]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="childIdsForm">
          <Controller
            name={formFieldNames.childIds}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="childIdsForm"
                label="Child Ids"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="Child Ids"
                  type="text"
                  value={value || ''}
                  onChange={(e) => onChange(e.target.value.trimStart())}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.childIds]}
                  isInvalid={!!errors[formFieldNames.childIds]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.childIds]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="my-4">
        <Form.Group as={Col} controlId="alternateNamesForm">
          <Controller
            name={formFieldNames.alternateNames}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabel
                controlId="alternateNamesForm"
                label="Alternate Names"
                className="text-black-50 lh-sm"
              >
                <Form.Control
                  placeholder="Alternate Names"
                  type="text"
                  value={value || ''}
                  onChange={(e) => onChange(e.target.value.trimStart())}
                  onBlur={onBlur}
                  isValid={value && !errors[formFieldNames.alternateNames]}
                  isInvalid={!!errors[formFieldNames.alternateNames]}
                />
                <Form.Control.Feedback
                  className="position-absolute text-truncate custom-error"
                  type="invalid"
                >
                  {errors[formFieldNames.alternateNames]?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            )}
          />
        </Form.Group>
      </Row>
    </>
  );
}
