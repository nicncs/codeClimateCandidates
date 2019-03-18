import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from 'app/App';

const PROP_TYPES = {
  store: PropTypes.object,
};

const DEFAULT_PROPS = {
  store: null,
};

export default function Root({ store, ...props }) {
  return (
    <Provider {...{store}}>
      <App {...props} />
    </Provider>
  );
}

Root.propTypes    = PROP_TYPES;
Root.defaultProps = DEFAULT_PROPS;
