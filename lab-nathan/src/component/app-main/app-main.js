import React from 'react';
import PropTypes from 'prop-types';
import NoteEditor from '../note-editor/note-editor.js'
import './_app-main.scss';

class AppMain extends React.Component {
  render() {
    return (
      <section id='app-main'>
        <NoteEditor app={this.props.app} note={this.props.app.selectedNote} />
      </section>
    );
  }
}

AppMain.propTypes = {
  app: PropTypes.object
};

export default AppMain;
