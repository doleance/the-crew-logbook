import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Playfield from './components/playfield/Playfield';
import { INITIAL_PAGE } from './constants/page.constants';

export interface PageContext {
  currentPage: number;
  setCurrentPage: Function;
}

export const initialPageContext: PageContext = {
  currentPage: INITIAL_PAGE,
  setCurrentPage: () => {},
}

export const PageContext = React.createContext<PageContext>(initialPageContext);

function App() {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const pageContext = { currentPage, setCurrentPage };

  return (
    <PageContext.Provider value={pageContext}>
      <div className="page-container">
        <Header />
        <div className="main-container">
          <Playfield />
          <Navigation />
        </div>
      </div>
    </PageContext.Provider>
  );
}

export default App;
