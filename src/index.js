import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './services/store';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import HomePage from './pages/HomePage/index';
import LeaguePage from './pages/LeaguePage/index';
import MatchPage from './pages/MatchPage/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/league' element={<LeaguePage />} />
          <Route exact path='/match' element={<MatchPage />} />
        </Routes>
      </Router>
    </Provider>
  </QueryClientProvider> 
    
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
