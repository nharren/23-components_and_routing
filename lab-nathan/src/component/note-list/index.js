'use strict';

import './_note-list.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let noteId = e.target.getAttribute('data-note-id');
    let note = this.props.app.state.notes.find(note => note.id === noteId);
    this.props.app.setState({ selectedNote: note });
  }

  render() {
    let noteListItems = this.props.app.state.notes.map((note, index) => {
      return (
        <li key={index} onClick={this.handleClick}>
          <Link to='/' data-note-id={note.id}>{note.name}</Link>
        </li>
      );
    });

    return (
      <ul className='noteList'>
        {noteListItems}
      </ul>
    );
  }
}

NoteList.propTypes = {
  app: PropTypes.object
};

export default NoteList;
