import './_note-list.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item.js';

class NoteList extends React.Component {
  render() {
    let notes = this.props.app.state.notes;
    let noteListItems = notes.map((note, index) => {
      return <NoteItem key={index} app={this.props.app} note={note} />;
    });

    return (
      <ul className='note-list'>
        {noteListItems}
      </ul>
    );
  }
}

NoteList.propTypes = {
  app: PropTypes.object
};

export default NoteList;
