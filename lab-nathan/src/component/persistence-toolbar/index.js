'use strict';

import './_persistence-toolbar.scss';
import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.delete();
  }

  handleSaveClick(e) {
    e.preventDefault();
    this.props.save();
  }

  render() {
    return (
      <div className='persistenceToolbar'>
        <button
          name='delete'
          type='submit'
          onClick={this.handleDeleteClick}>
          Delete
        </button>
        <button
          name='save'
          type='submit'
          onClick={this.handleSaveClick}>
          Save
        </button>
      </div>
    );
  }
}

NoteList.propTypes = {
  app: PropTypes.object,
  save: PropTypes.func,
  delete: PropTypes.func
};

export default NoteList;
