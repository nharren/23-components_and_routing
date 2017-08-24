'use strict';

import React from 'react';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import './_note-create-form.scss';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          onChange={this.handleChange}
          required
        />
        <div className='separator' />
        <textarea
          name='content'
          type='text'
          placeholder='Message'
          onChange={this.handleChange}
          required
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  app: PropTypes.object
};

export default NoteCreateForm;
