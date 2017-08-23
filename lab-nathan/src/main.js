'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NoteCreateForm from './component/note-create-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/create' component={NoteCreateForm} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
