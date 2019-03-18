import React, { Component } from 'react';

import QuestionnaireWizard from './questionnaire/QuestionnaireWizard';
import AppShell from './AppShell';

class App extends Component {
  render() {
    return (
      <AppShell>
        <QuestionnaireWizard />
      </AppShell>
    );
  }
}

export default App;
