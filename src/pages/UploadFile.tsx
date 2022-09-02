import React, { useCallback, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { XLS_FILE_ICON } from '../assets/icons/Icon';
import { DropAndDownFileInput } from '../components/drop-and-down-file-input';
import { PageHeader } from '../components/share/page-header';
import { MainContainer } from '../components/share/main-container';
import { useActions, useSelector } from '../hooks';
import Home from './Home';

const Papa = require('papaparse');

const UploadFile: React.FC = () => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const { sendFile } = useActions();
  const [ currentFileName, setCurrentFileName ] = useState<string>('');
  const [ dataToSend, setDataToSend ] = useState<Object[]>([]);
  const { isFetching } = useSelector((state) => state.uploadFile);

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

  const handleOnLoadFile = async (file: File) => {
    if (file) {
      setCurrentFileName(file.name);
      Papa.parse(file, {
        header: true,
        complete(results: any) {
          setDataToSend(results.data);
        }
      });
    }
  };

  const handleSendFile = async () => {
    const token = await getAccessToken();
    if (dataToSend && token) {
      await sendFile({ accessToken: token, data: dataToSend});
      setDataToSend([]);
      setCurrentFileName('');
    }
  };

  return (
    <MainContainer fluid className="px-sm-3">
      <PageHeader
        iconName={XLS_FILE_ICON}
        title="Please Upload CSV File"
      />
      <Row>
        <Col xs={12}>
          <DropAndDownFileInput
            className="align-self-center"
            fileNameToShow={currentFileName}
            onLoadFile={handleOnLoadFile}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} className="d-flex justify-content-center">
          <Button variant="outline-dark" onClick={handleSendFile} disabled={!currentFileName || isFetching}>
            Send File
          </Button>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default withAuthenticationRequired(UploadFile, { onRedirecting: () => <Home/> });
