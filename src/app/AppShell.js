import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import './AppShell.css';

const PROP_TYPES = {
  children: PropTypes.any,
};

const DEFAULT_PROPS = {
  children: null,
};

export default function AppShell(props) {
  return (
    <Container className="app">
      {props.children}
    </Container>
  );
}

AppShell.propTypes    = PROP_TYPES;
AppShell.defaultProps = DEFAULT_PROPS;
