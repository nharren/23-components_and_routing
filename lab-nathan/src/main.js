'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NoteCreateForm from './component/note-create-form';
import AppSidebar from './component/app-sidebar';
import NoteItem from './component/note-item';
import './_reset.scss';
import './base.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      selectedNote: null
    };
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    };
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <section>
            <AppSidebar app={this.getApp()} />
          </section>
          <section>
            <Route exact path='/' component={() => <NoteItem app={this.getApp()} />} />
            <Route exact path='/create' component={() => <NoteCreateForm app={this.getApp()} />} />
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
