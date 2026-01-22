import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
    </BrowserRouter>
);