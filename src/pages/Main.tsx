import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { useActions, useSelector } from '../hooks';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  CONCEPTS_ROUTE, EDIT_CONCEPT_ROUTE,
  HOME_ROUTE,
  NEW_CONCEPT_ROUTE,
  NO_MATCH_ROUTE,
  UPLOAD_ROUTE,
  USER_INFO_ROUTE
} from '../constants';
import FooterNavBar from '../components/footer-nav-bar';
import Sidebar from '../components/sidebar';
import { Loading } from '../components/share/loading';

import { Concepts, ConceptView } from './concepts';
import Home from './Home';
import UserInfo from './UserInfo';
import UploadFile from './UploadFile';

import './styles.scss';

const Main: React.FC = () => {
  const { setUserInfo} = useActions();
  const { error: conceptError } = useSelector((state) => state.concepts);
  const { error: uploadFileError } = useSelector((state) => state.uploadFile);

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserInfo(user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if ((conceptError === 'UNAUTHORIZED' && isAuthenticated)
      || (uploadFileError === 'UNAUTHORIZED' && isAuthenticated)) {
      logout();
    }
  }, [conceptError, uploadFileError]);

  return (
    <div className="m-2">
      <div className="d-none d-sm-block position-absolute sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        {isLoading ? (
          <Loading/>
        ) : (
          <Routes>
            <Route path={HOME_ROUTE} element={<Home/>}/>
            <Route path={USER_INFO_ROUTE} element={<UserInfo/>}/>
            <Route path={CONCEPTS_ROUTE} element={<Concepts/>}/>
            <Route path={NEW_CONCEPT_ROUTE} element={<ConceptView/>}/>
            <Route path={EDIT_CONCEPT_ROUTE} element={<ConceptView/>}/>
            <Route path={UPLOAD_ROUTE} element={<UploadFile/>}/>
            <Route path={NO_MATCH_ROUTE} element={<Navigate replace to={HOME_ROUTE}/>}/>
          </Routes>
        )}
      </div>
      <FooterNavBar/>
    </div>
  );
};

export default Main;
