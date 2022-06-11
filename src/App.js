import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/cv-project' element={<Login />} />
				<Route path='/cv-project/signup' element={<SignUp />} />
				<Route path='/cv-project/password-reset' element={<PasswordReset />} />
				<Route
					path='/cv-project/home'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
