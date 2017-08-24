'use strict';

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteItem from '../note-item';
import NoteCreateForm from '../note-create-form'
import './_app-main.scss';

class AppMain extends React.Component {
  render() {
    return (
      <section id='app-main'>
        <Route exact path='/' component={() => <NoteItem app={this.props.app} />} />
        <Route exact path='/create' component={() => <NoteCreateForm app={this.props.app} />} />
      </section>
    );
  }
}

AppMain.propTypes = {
  app: PropTypes.object
};

export default AppMain;
