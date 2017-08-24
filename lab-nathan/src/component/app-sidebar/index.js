'use strict';

import './_app-sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteList from '../note-list';

class AppSidebar extends React.Component {
  render() {
    return (
      <section className='appSidebar'>
        <h3>
          <Link to='/create'>Create</Link>
        </h3>
        <NoteList app={this.props.app} />
      </section>
    );
  }
}

AppSidebar.propTypes = {
  app: PropTypes.object
};

export default AppSidebar;
