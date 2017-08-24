'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../note-list';
import NoteItem from '../note-item';
import NoteCreateForm from '../note-create-form';

class NoteListPage extends React.Component {
  render() {
    return (
      <div>
        <NoteList app={this.props.app} />
        <NoteItem app={this.props.app} />
        <NoteCreateForm app={this.props.app} />
      </div>
    );
  }
}

NoteListPage.propTypes = {
  app: PropTypes.object
};

export default NoteListPage;
