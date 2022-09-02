import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider} from '@auth0/auth0-react';

import './index.scss';

import { store } from './store';
import Main from './pages/Main';

const App: React.FC = () => {

  return (
    <React.StrictMode>
      <Router>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_PROVIDER_DOMAIN!}
          clientId={process.env.REACT_APP_AUTH0_PROVIDER_CLIENT_ID!}
          redirectUri={window.location.origin}
        >
          <Provider store={store}>
            <Main />
          </Provider>
        </Auth0Provider>
      </Router>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(<App/>);
