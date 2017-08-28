import React from 'react';
import PropTypes from 'prop-types';
import './_note-item.scss';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleClick() {
    this.props.app.setState({ selectedNote: this.props.note });
  }

  handleKeyDown(e) {
    if (e.key === 'Delete') {
      this.delete();
      e.preventDefault();    
    }
  }

  delete() {
    let selectedNote = this.props.app.state.selectedNote;
    
    if (selectedNote) {
      let newNotes = this.props.app.state.notes.filter(note => note.id !== selectedNote.id);
      this.props.app.setState({ 
        notes: newNotes,
        selectedNote: null
       });
    }
  }
  
  render() {
    let classes = 'note-item';

    if (this.props.app.state.selectedNote && this.props.app.state.selectedNote.id === this.props.note.id) {
      classes += ' selected';
    }
    
    return (
      <li onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex='1' className={classes}>
        <h2>{this.props.note.name}</h2>
        <p>{this.props.note.content}</p>
      </li>
    );
  }
}

NoteItem.propTypes = {
  app: PropTypes.object,
  note: PropTypes.object
};

export default NoteItem;
