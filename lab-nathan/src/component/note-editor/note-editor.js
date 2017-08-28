import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import './_note-editor.scss';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    let selectedNote = props.app.state.selectedNote;

    if (selectedNote) {
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

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.create = this.create.bind(this);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 's') {
      this.save();
      e.preventDefault();    
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save() {
    let note = this.props.app.state.selectedNote;

    if (note) {
      note.name = this.state.name;
      note.content = this.state.content;
      let updatedNotes = this.props.app.state.notes.map(currentNote => {
        return currentNote.id === note.id ? note : currentNote;
      });

      this.props.app.setState({ notes: updatedNotes });
      this.props.app.setState({ selectedNote: note });
    }
    else {
      this.create();
    }
  }

  create() {
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
  }

  render() {
    return (
      <div className='noteEditor' onKeyDown={this.handleKeyDown}>
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
};

export default NoteEditor;
