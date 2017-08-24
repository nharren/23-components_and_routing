import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './_note-item.scss';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.app.setState({ selectedNote: this.props.note });
  }
  
  render() {
    let classes = 'note-item';

    if (this.props.app.state.selectedNote && this.props.app.state.selectedNote.id === this.props.note.id) {
      classes += ' selected';
    }
    
    return (
      <li onClick={this.handleClick} className={classes}>
        <Link to='/edit'>
          <h2>{this.props.note.name}</h2>
          <p>{this.props.note.content}</p>
        </Link>
      </li>
    );
  }
}

NoteItem.propTypes = {
  app: PropTypes.object,
  note: PropTypes.object
};

export default NoteItem;
