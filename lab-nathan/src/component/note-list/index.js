'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  render() {
    let noteListItems = this.props.app.notes.map((note, index) => {
      return <li key={index}>{note.name}</li>;
    });

    return (
      <ul>
        {noteListItems}
      </ul>
    );
  }
}

NoteList.propTypes = {
  app: PropTypes.object
};

export default NoteList;
