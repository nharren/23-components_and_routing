'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class NoteListPage extends React.Component {
  render() {
    return (
      <div>
        <NoteList />
        <NoteItem />
      </div>
    );
  }
}

NoteListPage.propTypes = {
  app: PropTypes.object
};

export default NoteListPage;
