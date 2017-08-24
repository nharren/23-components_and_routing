'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class NoteItem extends React.Component {
  render() {
    if (!this.props.app.state.selectedNote) {
      return <div></div>;
    }
    
    return (
      <div>
        <h2>{this.props.app.state.selectedNote.name}</h2>
        <p>{this.props.app.state.selectedNote.content}</p>
      </div>
    );
  }
}

NoteItem.propTypes = {
  app: PropTypes.object
};

export default NoteItem;
