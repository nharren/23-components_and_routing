import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import PersistenceToolbar from '../persistence-toolbar/persistence-toolbar.js';
import './_note-editor.scss';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    let selectedNote = props.app.state.selectedNote;

    if (!props.create && selectedNote) {
      this.state = {
        name: selectedNote.name,
        content: selectedNote.content
      };
    }
    else {
      this.state = {
        name: '',
        content: ''
      };
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save() {
    let note = {
      id: uuidv1(),
      name: this.state.name,
      editing: false,
      complete: false,
      content: this.state.content
    };

    this.props.app.setState(state => ({
      notes: [...state.notes, note]
    }));

    this.props.app.setState({ selectedNote: note });
    this.props.history.push('/edit');
  }

  delete() {
    let selectedNote = this.props.app.state.selectedNote;
    
    if (selectedNote) {
      let newNotes = this.props.app.state.notes.filter(note => note.id !== selectedNote.id);
      this.props.app.setState({ 
        notes: newNotes,
        selectedNote: null
       });
      this.props.history.push('/create');
    }
  }

  render() {
    return (
      <div className='noteEditor'>
        <PersistenceToolbar save={this.save} delete={this.delete} />
        <input
          name='name'
          type='text'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange}
          required
        />
        <div className='separator' />
        <textarea
          name='content'
          type='text'
          value={this.state.content}          
          placeholder='Message'
          onChange={this.handleChange}
          required
        />
      </div>
    );
  }
}

NoteEditor.propTypes = {
  app: PropTypes.object,
  create: PropTypes.bool,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(NoteEditor);
