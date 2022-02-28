import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import './index.css';
import Navigation from './components/Navigation';

const App = ({ title }) => {

  const languages = ['React', 'Vue', 'Angular', 'Ruby', 'Python', 'Laravel', 'Flutter', 'Firebase', 'Node.js'];

  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await Axios.get(`${requestUrl}${keyword}`);
    return result;
  }

  const routeNavigation = languages.map(language => {
    const id = language.toLowerCase()
    return <Route
      path={`/${id}`}
      element={
        <Booklist
          language={language}
          getData={keyword => getDataFromAPI(keyword)}
        />
      }
      key={id}
    />
  })

  return (
    <div>
      <BrowserRouter>
        <h1 className='app-title'>
          <Link to={'/'}>{title}</Link>
        </h1>
        <Navigation languages={languages} />
        <Routes>
          <Route path='/' element='Homepage' />
          {routeNavigation}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
