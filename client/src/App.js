import React, { Component }  from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { TransactionProvider } from './context/TransactionContext'
import TransactionHistory from './components/TransactionHistory';
import './App.css';

class App extends Component {
  render() {
    return (
      <TransactionProvider>
        <div className="style">
          <Header />
          <Main />
          <TransactionHistory />
        </div>
        <div className='for-mobile'>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" alt='something-wrong' className='something-wrong-img'/>
          <p className='for-mobile-heading'><strong>This website is currently only available for PC, but we are working on it. Please try again later.</strong> </p>
        </div>
      </TransactionProvider>
    )
  }
}

export default App;
