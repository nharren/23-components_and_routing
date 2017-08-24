'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppSidebar from './component/app-sidebar';
import AppMain from './component/app-main';
import './style/_reset.scss';
import './style/base.scss';

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

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <AppSidebar app={this.getApp()} />
          <AppMain app={this.getApp()} />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
