// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/custom.css';
import 'bootstrap/dist/js/bootstrap';

// Pages
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
