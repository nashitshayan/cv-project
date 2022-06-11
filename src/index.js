import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/App.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserAuthContextProvider>
			<Router>
				<App />
			</Router>
		</UserAuthContextProvider>
	</React.StrictMode>,
);
