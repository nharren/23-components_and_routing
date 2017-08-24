'use strict';

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteEditor from '../note-editor'
import './_app-main.scss';

class AppMain extends React.Component {
  render() {
    return (
      <section id='app-main'>
        <Redirect from='/' to='/create' />
        <Route exact path='/edit' component={() => <NoteEditor app={this.props.app} />} />
        <Route exact path='/create' component={() => <NoteEditor app={this.props.app} create={true} />} />
      </section>
    );
  }
}

AppMain.propTypes = {
  app: PropTypes.object
};

export default AppMain;
