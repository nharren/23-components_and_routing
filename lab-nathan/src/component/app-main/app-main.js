import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteEditor from '../note-editor/note-editor.js'
import './_app-main.scss';

class AppMain extends React.Component {
  render() {
    return (
      <section id='app-main'>
        <Route path='*' component={() => <NoteEditor app={this.props.app} />} />
      </section>
    );
  }
}

AppMain.propTypes = {
  app: PropTypes.object
};

export default AppMain;
