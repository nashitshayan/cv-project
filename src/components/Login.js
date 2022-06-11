import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Button, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { signIn, googleSignIn } = useUserAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			navigate('/cv-project/home');
		} catch (err) {
			setError(err.message);
		}
	};
	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate('/cv-project/home');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className='auth-wrapper'>
			<div className='p-4 box '>
				<h2 className='mb-3 text-center'>Login</h2>
				{error && <Alert variant='danger'>{error}</Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							type='email'
							placeholder='Email address'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button variant='primary' type='submit'>
							Log In
						</Button>
					</div>
				</Form>
				<div className='mt-2'>
					<Link to='/cv-project/password-reset'>Forgot Password</Link>
				</div>
				<hr />
				<div>
					<GoogleButton
						className='g-btn'
						type='dark'
						onClick={handleGoogleSignIn}
					/>
				</div>
			</div>
			<div className='p-4 box mt-3 text-center'>
				Don't have an account? <Link to='/cv-project/signup'>Sign Up</Link>
			</div>
		</div>
	);
}

export default Login;
