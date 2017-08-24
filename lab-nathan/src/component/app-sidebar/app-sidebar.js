import './_app-sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteList from '../note-list/note-list.js';

class AppSidebar extends React.Component {
  render() {
    return (
      <section className='app-sidebar'>
        <div className='sidebar-header'>
          <h4 className='sidebar-header-title'>NOTES</h4>
          <h2 className='sidebar-header-create'>
            <Link to='/create'>+</Link>
          </h2>
        </div>
        
        <NoteList app={this.props.app} />
      </section>
    );
  }
}

AppSidebar.propTypes = {
  app: PropTypes.object
};

export default AppSidebar;
