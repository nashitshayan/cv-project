import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import ReactDOM from 'react-dom/client';
import App from './App';
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
