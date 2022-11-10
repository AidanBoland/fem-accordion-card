import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Card from './components/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Card></Card>
    </React.StrictMode>
);