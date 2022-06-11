import React, { useEffect } from 'react';
import './css/App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useUserAuth } from './context/UserAuthContext';
import './css/App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
	const { user } = useUserAuth();
	let navigate = useNavigate();
	//if user is signed in, navigate to home
	useEffect(() => {
		if (user) navigate('/home');
	}, [user]);
	return (
		<div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/password-reset' element={<PasswordReset />} />
				<Route
					path='/home'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
		// <Container>
		// 	<Row>
		// 		<Col>
		// 			<UserAuthContextProvider>
		// 				<Routes>
		// 					<Route path='/' element={<Login />} />
		// 					<Route path='/signup' element={<SignUp />} />
		// 					<Route
		// 						path='/home'
		// 						element={
		// 							<ProtectedRoute>
		// 								<Home />
		// 							</ProtectedRoute>
		// 						}
		// 					/>
		// 				</Routes>
		// 			</UserAuthContextProvider>
		// 		</Col>
		// 	</Row>
		// </Container>
	);
}

export default App;
