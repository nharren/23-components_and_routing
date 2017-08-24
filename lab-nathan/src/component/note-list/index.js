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
    let noteId = e.target.parentElement.getAttribute('data-noteId');
    let note = this.props.app.state.notes.find(note => note.id === noteId);
    this.props.app.setState({ selectedNote: note });
  }

  render() {
    let noteListItems = this.props.app.state.notes.map((note, index) => {
      return <li key={index} data-noteId={note.id} onClick={this.handleClick}><Link to='/'>{note.name}</Link></li>;
    });

    return (
      <div className='noteList'>
        <h3><Link to='/create'>Create</Link></h3>
        <ul>
          {noteListItems}
        </ul>
      </div>
    );
  }
}

NoteList.propTypes = {
  app: PropTypes.object
};

export default NoteList;
