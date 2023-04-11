import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { RouteType } from './types';

const App: React.FC = () => {
  return (
    <div className='font-bold'>
      <Router>
        <Routes>
          {routes.map((route: RouteType) => (
            <Route key={route.key} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
