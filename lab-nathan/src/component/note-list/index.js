'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let noteId = e.target.getAttribute('data-noteId');
    let note = this.props.app.state.notes.find(note => note.id === noteId);
    this.props.app.setState({ selectedNote: note });
  }

  render() {
    let noteListItems = this.props.app.state.notes.map((note, index) => {
      return <li key={index} data-noteId={note.id} onClick={this.handleClick}>{note.name}</li>;
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
